<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="slideDownAnimation" elevated style="background-color: #0199da;" v-if="filterLiveNowEvents && filterLiveNowEvents.length > 0 && $route.name !== 'live-page' && $route.name !== 'video'">
      <q-toolbar class="row">
        <div class="col-8 col-md-10 row" style="overflow: hidden;">
          <p class="q-my-none q-mr-md scrolling-titles">
            <span v-for="event in filterLiveNowEvents" :key="event.id"> 
              - {{ event.title.rendered }} - 
            </span>
          </p>
        </div>
        <q-btn 
        class="flashy-btn col-4 col-md-2" 
        color="red-6"
        :to="{ name: 'live-page' }"
        >
        live ora
        <q-icon name="circle" size="12px" class="q-ml-sm"/></q-btn>
      </q-toolbar>
    </q-header>
    <q-footer elevated style="background-color: #353535;" class="q-pb-sm" v-if="$route.name !== 'video'">
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
        icon="menu"
        >
          <q-menu>
            <q-list style="min-width: 300px">
              <q-item 
              clickable 
              >
                <q-item-section>Discipline</q-item-section>
                  <q-menu dark auto-close anchor="top middle" self="top middle">
                    <q-list style="min-width: 300px">
                      <q-item
                      :to="{ name: 'sport', params: { id: 216, name: 'Volo' } }"
                      >
                        <q-item-section>
                          Volo
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item
                      :to="{ name: 'sport', params: { id: 197,  name: 'Raffa' } }"
                      >
                        <q-item-section>
                          Raffa
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item
                      :to="{ name: 'sport', params: { id: 242,  name: 'Petanque' } }"
                      >
                        <q-item-section>
                          Petanque
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
              </q-item>
              <q-item 
              clickable 
              >
              <q-item-section>Rubriche</q-item-section>
                <q-menu dark auto-close anchor="top middle" self="top middle">
                  <q-list style="min-width: 300px">
                    <q-item
                    :to="{ name: 'sport', params: { id: 229, name: 'Bocce Mon Amour' } }"
                    >
                      <q-item-section>
                        Bocce Mon Amour
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item
                    :to="{ name: 'sport', params: { id: 224, name: 'Boccia e Risposta' } }"
                    >
                      <q-item-section>
                        Boccia e Risposta
                      </q-item-section>
                    </q-item>
                    <q-separator />
                  </q-list>
                </q-menu>
            </q-item>
            <q-item
            clickable
            :to="{ name: 'live-page' }"
            >
            <q-item-section>Eventi live</q-item-section>
            </q-item>
            <q-separator />
            <q-item 
            clickable 
            v-close-popup
            @click="searchFilter = true"
            >
              <q-item-section>Cerca</q-item-section>
              <q-item-section avatar>
                <q-icon name="search" />
              </q-item-section>
            </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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
              @click="redirectTo(item)"
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

.flashy-btn .q-icon {
  animation-name: flash;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

@keyframes flash {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.scrolling-titles {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.scrolling-titles span {
  display: inline-block;
  padding-left: 100%;
  animation: moving 5s linear infinite;
}

@keyframes moving {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>

<script>
import { defineComponent, ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const route = useRoute()

    const screenSize = ref(null)
    const leftDrawerOpen = ref(false)
    const filterSelect = ref(null)
    const searchValue = ref('')
    const searchResult = ref(null)
    const searchError = ref(null)
    const loadingData = ref(false)
    const videos = ref(null)

    onMounted(() => {
      screenSize.value = window.innerWidth

      // window.addEventListener('keydown', e => {
      //   if(e.keyCode === 10009) {
      //     alert(e.keyCode)
      //     this.$router.push('/')
      //   }
      // })

      axios.get(`https://fast-peak-73010.herokuapp.com/https://topbocce.live/wp-json/wp/v2/video`)
        .then(res => videos.value = res)
        .catch(err => console.log(err))
    })

    const filterLiveNowEvents = computed(() => {
      if(videos.value && videos.value.data) {
        return videos.value.data.filter(video => video.is_live === 1)
      }
    })

    watch(searchValue, async (newVal, oldVal) => {
      if(newVal.length >= 3) {
        loadingData.value = true
        searchResult.value = await axios.get('https://fast-peak-73010.herokuapp.com/https://www.topbocce.live/wp-json/fib/v1/search?term=' + newVal)
        .then(res => {
          loadingData.value = false
          // let filteredData = res.data.filter(res => res.video_url)
          return res.data
        })
      }
      else {
        searchResult.value = null
      }
    })

    return {
      filterLiveNowEvents,
      videos,
      screenSize,
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
  },
  methods: {
      redirectTo(ep) {
        console.log(ep)
        if (ep.video_url && !ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.video_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
        }
        else if (ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.embed_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
        }
      }
  }
})
</script>
