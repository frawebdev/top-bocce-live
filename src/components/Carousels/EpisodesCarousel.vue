<template>
    <div class="q-ma-lg">
    <h4 class="q-mb-sm text-white text-uppercase text-bold">{{ title }}</h4>
    <swiper
        :modules="modules"
        :space-between="20"
        navigation
        :breakpoints="{
            640: {
                slidesPerView: 3
            }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide :style="`background-color: grey;background-image: url('${episode.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-blend-mode: overlay; background-size: cover; background-position: center; height:200px;`" v-for="episode in content" :key="episode.id">
          <div class="column flex-center" style="height: 100%; width: 100%;">
              <div style="margin: 5% 10% 5% 10%;" class="text-white">
                  <h6 class="q-ma-xs text-bold" v-if="episode.title.rendered">{{ episode.title.rendered }}</h6>
                  <h6 class="q-ma-xs text-bold" v-else-if="episode.title">{{ episode.title }}</h6>
                  <div v-html="episode.excerpt.rendered" v-if="episode.excerpt.rendered"></div>
                  <div v-html="episode.excerpt" v-else-if="episode.excerpt"></div>
                  <q-btn
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  v-if="episode.episode_url" 
                  class="q-mt-md"
                  :to="{ name: 'video', params: { id: episode.episode_url, sport: episode.episode_sport } }"
                  >
                  Vai
                  </q-btn>
                  <p v-else> 
                  Non Disponibile
                  </p>
              </div>
          </div>
        </swiper-slide>
    </swiper>
    </div>
</template>
<script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  //components

  // Import Swiper styles
  export default {
    props: [
        'title',
        'content'
    ],
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
      }
    },
  }
</script>