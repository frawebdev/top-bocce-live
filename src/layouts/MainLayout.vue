<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated style="background-color: #0074a5;">
      <q-toolbar class="row justify-around">
        <q-btn
        flat
        dense
        icon="arrow_back_ios"
        @click="$router.go(-1)"
        >
        </q-btn>
        <q-img 
        src="https://www.elev8ted.it/fibtv/wp-content/uploads/2022/04/LOGO-FIB-TV.png"
        width="50px"
        @click="$router.push('/')"
        />
        <q-btn 
        flat
        dense
        round
        icon="search"
        @click="searchFilter = true"
        />
      </q-toolbar>
    </q-footer>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container style="background-color: #141414;">
      <q-dialog v-model="searchFilter">
        <q-card style="min-width: 350px;">
          <q-card-section class="q-gutter-y-md">
            <q-input filled v-model="searchValue" label="Digita almeno 3 caratteri" />
            <q-list v-if="searchResult && searchResult.length > 0">
              <q-item 
              v-for="item in searchResult"
              :key="item.title"
              clickable 
              v-ripple
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

//components
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

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
        searchResult.value = await axios.get('https://www.elev8ted.it/fib/wp-json/fib/v1/search?term=' + newVal)
        .then(res => {
          loadingData.value = false
          return res.data
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
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
