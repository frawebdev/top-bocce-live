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
        <swiper-slide :style="`background-color: grey;background-image: url('${season.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-blend-mode: overlay; background-size: cover; background-position: center; height:200px;`" v-for="season in content" :key="season.id">
          <div class="column flex-center text-white" style="height: 100%; width: 100%;">
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold">{{ season.title.rendered }}</h6>
                  <div v-html="season.excerpt.rendered" class="q-mb-xs"></div>
                  <q-btn
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  class="q-mt-md"
                  :to="{ name: 'season', params: { id: season.id } }"
                  >
                  Vai
                  </q-btn>
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