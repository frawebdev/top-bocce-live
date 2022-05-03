<template>
    <div class="q-ma-lg">
    <h4 class="q-mb-sm text-white text-uppercase text-bold">Gli sport</h4>
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
        <swiper-slide :style="`background-color: grey;background-image: url(''); background-size: cover; background-position: center; height:200px;`">
          <div class="column flex-center text-white" style="height: 100%; width: 100%;">
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold">Sport 1</h6>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et!</div>
                  <q-btn
                  v-ripple
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  class="q-mt-md text-white"
                  :to="{ name: 'sport', params: { name: 'sport_1' } }"
                  >
                  Vai
                  </q-btn>
              </div>
          </div>
        </swiper-slide>
        <swiper-slide :style="`background-color: grey;background-image: url(''); background-size: cover; background-position: center; height:200px;`">
          <div class="column flex-center text-white" style="height: 100%; width: 100%;">
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold">Sport 2</h6>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et!</div>
                  <q-btn
                  v-ripple
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  class="q-mt-md text-white"
                  :to="{ name: 'sport', params: { name: 'sport_2' } }"
                  >
                  Vai
                  </q-btn>
              </div>
          </div>
        </swiper-slide>
        <swiper-slide :style="`background-color: grey;background-image: url(''); background-size: cover; background-position: center; height:200px;`">
          <div class="column flex-center text-white" style="height: 100%; width: 100%;">
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold">Sport 3</h6>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et!</div>
                  <q-btn
                  v-ripple
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  class="q-mt-md text-white"
                  :to="{ name: 'sport', params: { name: 'sport_3' } }"
                  >
                  Vai
                  </q-btn>
              </div>
          </div>
        </swiper-slide>
        <swiper-slide :style="`background-color: grey;background-image: url(''); background-size: cover; background-position: center; height:200px;`">
          <div class="column flex-center text-white" style="height: 100%; width: 100%;">
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold">Sport 4</h6>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, et!</div>
                  <q-btn
                  v-ripple
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
                  class="q-mt-md text-white"
                  :to="{ name: 'sport', params: { name: 'sport_4' } }"
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