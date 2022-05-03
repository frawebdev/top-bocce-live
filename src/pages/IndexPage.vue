<template>
  <q-page>
    <main-carousel 
    v-if="featuredEpisodes"
    :content="featuredEpisodes"
    />    
    <q-skeleton width="100%" height="400px" v-else/>
    <episodes-carousel 
    v-if="lastEpisodes"
    title="Gli ultimi episodi"
    :content="lastEpisodes"
    />
    <skeleton-carousel v-else/>
    <seasons-carousel 
    v-if="lastSeasons"
    title="Le ultime stagioni"
    :content="lastSeasons"
    />
    <skeleton-carousel class="q-mt-xl" v-else/>
    <main-banner 
    v-if="mainBanner"
    :content="mainBanner"
    />
    <q-skeleton width="100%" height="200px" v-else/>
    <sport-carousel 
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
//components
import MainCarousel from '../components/Carousels/MainCarousel.vue'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'
import SeasonsCarousel from '../components/Carousels/SeasonsCarousel.vue'
import SportCarousel from '../components/Carousels/SportCarousel.vue'
import SkeletonCarousel from '../components/Carousels/SkeletonCarousel.vue'
import MainBanner from '../components/Banners/MainBanner.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainCarousel,
    EpisodesCarousel,
    SeasonsCarousel,
    SportCarousel,
    SkeletonCarousel,
    MainBanner
  },
  data() {
    return {
      lastEpisodes: null,
      lastSeasons: null,
      featuredEpisodes: null,
      mainBanner: null
    }
  },
  async mounted() {

    this.featuredEpisodes = await axios.get('https://www.elev8ted.it/fib/wp-json/wp/v2/episode?per_page=3')
      .then(res => {
        return res.data.filter(episode => {
          return episode.featured == 'yes'
        })
      })

    this.lastEpisodes = await axios.get('https://www.elev8ted.it/fib/wp-json/wp/v2/episode?orderby=date')
      .then(res => {
        return res.data
      })

    this.lastSeasons = await axios.get('https://www.elev8ted.it/fib/wp-json/wp/v2/tv_show?orderby=date')
      .then(res => {
        return res.data
      })

      this.mainBanner = await axios.get('https://www.elev8ted.it/fib/wp-json/wp/v2/posts/241')
      .then(res => {
        return res.data
      })

  }
})
</script>
