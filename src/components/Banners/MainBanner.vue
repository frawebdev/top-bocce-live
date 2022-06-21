<template>
<div>
    <div v-if="content" class="banner q-mt-xl column flex-center carousel-bg fadeInAnimation" :style="`background-image: url('https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`">
      <div class="text-left text-white q-pa-md row" style="width: 100%; height: 100%;">
        <div class="col column justify-center items-center">
          <div class="text-left">
          <q-img 
          width="300px"
          src="https://www.topbocce.live/wp-content/uploads/2022/06/live.png" 
          class="q-mb-xl"
          />
          <q-list separator dark class="q-mb-lg">
            <q-item v-for="event in content" :key="event.id" style="font-size: 1.3rem;">
              {{ event.title.rendered }}
            </q-item>
          </q-list>
          <q-btn 
          v-if="content.length > 0"
          class="base-btn q-py-sm q-px-lg" 
          style="font-size: 1.1rem;"
          :to="{ name: 'live-page' }"
          >
            Vai ai live
            <q-icon name="play_arrow" />
          </q-btn>
          <div v-else>Nessun evento disponibile al momento</div>
          </div>
        </div>
        <div 
        class="col column flex-center q-pr-md"
        v-if="screenSize > 600"
        >
          <q-img 
          src='https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'
          />
        </div>
      </div>
    </div>
    <q-skeleton width="100%" height="40vh" class="banner" v-else/>
</div>
</template>

<script>
import SkeletonCarousel from '../Carousels/SkeletonCarousel.vue'

export default {
  data() {
    return {
      screenSize: null
    }
  },
  props: [
    'content'
  ],
  components: {
    SkeletonCarousel
  },
  mounted() {
    console.log(this.content)
    this.screenSize = window.innerWidth

    window.onresize = () => {
      this.screenSize = window.innerWidth
    }
  }
}
</script>