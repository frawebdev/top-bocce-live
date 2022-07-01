<template>
  <q-page>
    <main-carousel 
    :content="featuredEpisodes"
    />    
        <live-banner 
        :image="liveBanner"
        />
        <episodes-carousel 
        title="Gli ultimi episodi"
        :content="lastEpisodes"
        />
        <seasons-carousel
        title="Le ultime stagioni"
        :content="lastSeasons"
        />
        <main-banner 
        :content="mainBanner"
        :image="liveBanner"
        />
        <sport-carousel 
        title="Gli sport"
        :sports="sports"
        />
        <sport-carousel 
        title="Le rubriche"
        :sports="shows"
        />
  </q-page>
</template>

<style>
.index-content-padding {
  padding: 0;
}

@media (min-width: 1600px) {
  .index-content-padding {
    padding: 0 4%;
  }
}
</style>

<script>
import { defineComponent } from 'vue'
//components
import MainCarousel from '../components/Carousels/MainCarousel.vue'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'
import SeasonsCarousel from '../components/Carousels/SeasonsCarousel.vue'
import SportCarousel from '../components/Carousels/SportCarousel.vue'
import SkeletonCarousel from '../components/Carousels/SkeletonCarousel.vue'
import liveBanner from '../components/Banners/LiveBanner.vue'
import MainBanner from '../components/Banners/MainBanner.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    MainCarousel,
    EpisodesCarousel,
    SeasonsCarousel,
    SportCarousel,
    SkeletonCarousel,
    liveBanner,
    MainBanner
  },
  data() {
    return {
      lastEpisodes: null,
      lastSeasons: null,
      featuredEpisodes: null,
      liveBanner: null,
      mainBanner: null,
      sports: null,
      shows: null
    }
  },
  async mounted() {

    this.featuredEpisodes = await this.$api.get( '/wp/v2/movie?per_page=3')
      .then(res => {
        return res.data
      })

    this.lastEpisodes = await this.$api.get('/wp/v2/movie?orderby=date')
      .then(res => {
        return res.data
      })

    this.lastSeasons = await this.$api.get('/wp/v2/movie_genre')
      .then(res => {
        return res.data
      })

    this.liveBanner = await this.$api.get('/wp/v2/posts/13558')
      .then(res => {
        return res.data.image
      })

    this.mainBanner = await this.$api.get('/wp/v2/video')
      .then(res => {
        return res.data
      })
      
    this.sports = await this.$api.get('/wp/v2/movie_tag?include=197,216,242')
      .then(res => {
        return res.data
      })

    this.shows = await this.$api.get('/wp/v2/movie_tag?include=229,224')
      .then(res => {
        return res.data
      })
      
  }
})
</script>
