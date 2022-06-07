<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated style="background-color: #353535;" v-if="$route.name !== 'video'">
      <q-toolbar class="row justify-around">
        <q-btn
        flat
        dense
        icon="arrow_back_ios"
        @click="$router.go(-1)"
        class="focusable focus-btn"
        >
        </q-btn>
        <q-img 
        src="https://www.topbocce.live/wp-content/uploads/2022/05/logo-fib.png"
        width="80px"
        @click="$router.push('/')"
        />
        <q-btn 
        flat
        dense
        round
        icon="search"
        @click="searchFilter = true"
        class="focusable focus-btn"
        />
      </q-toolbar>
    </q-footer>

    <q-page-container style="background-color: #010b20;">
      <q-dialog v-model="searchFilter">
        <q-card style="min-width: 350px;">
          <q-card-section class="q-gutter-y-md">
            <div style="width: 100%; text-align: right;" class="focusable focus-btn">
              <q-btn 
              icon="close"
              @click="searchFilter = false"
              />
            </div>
              <q-input filled v-model="searchValue" label="Digita almeno 3 caratteri" class="focusable" autofocus/>
            <q-list v-if="searchResult && searchResult.length > 0">
              <q-item 
              v-for="item in searchResult"
              :key="item.title"
              clickable 
              v-ripple
              :to="{ name: 'video', params:{ 'id': item.video_url, 'sport': item.episode_sport } }"
              class="focusable"
              >
                <q-item-section>
                  {{ item.title }}
                </q-item-section>
              </q-item>
            </q-list>
            <q-spinner
              v-if="loadingData"
              color="black"
              size="3em"
            />
            <q-item v-if="!loadingData && searchResult && searchResult.length <= 0">
              Nessun video trovato con questo titolo
            </q-item>
          </q-card-section>
        </q-card>
      </q-dialog>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', sans-serif;
}

.swiper-button-next,
.swiper-button-prev {
  color: #0074a5;
}
</style>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const router = useRouter()

    const leftDrawerOpen = ref(false)
    const filterSelect = ref(null)
    const searchValue = ref('')
    const searchResult = ref(null)
    const searchError = ref(null)
    const loadingData = ref(false)

    watch(searchValue, async (newVal, oldVal) => {
      if(newVal.length >= 3) {
        loadingData.value = true
        searchResult.value = await axios.get('https://www.topbocce.live/wp-json/fib/v1/search?term=' + newVal)
        .then(res => {
          loadingData.value = false
          let filteredData = res.data.filter(res => res.video_url)
          return filteredData
        })
      }
      else {
        searchResult.value = null
      }
    })

    return {
      filterSelect,
      searchValue,
      searchError,
      searchFilter: ref(false),
      searchResult,
      loadingData,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
