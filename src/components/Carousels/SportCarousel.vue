<template>
<div class="carousel-x-padding">
    <div class="q-ma-lg" v-if="sports">
    <h4 class="q-mb-sm text-white text-bold fadeInAnimation">{{ title }}</h4>
    <swiper
    class="fadeInAnimation"
        :modules="modules"
        :space-between="20"
        :slidesPerView='1.1'
        :navigation="showNav"
    >
        <swiper-slide 
        v-for="sport in sports" :key="sport.id"
        :style="`background-image: url('${sport.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`"
        class="carousel-sport"
        >
          <router-link 
          :to="{ name: 'sport', params: { id: sport.id, name: sport.name } }"
          class="column justify-center text-white focusable" style="height: 100%; width: 100%; text-decoration: none;"
          >
              <div style="margin: 0 13px 0 13px;">
                  <h6 class="q-ma-xs text-bold title-size text-center">{{ sport.name }}</h6>
              </div>
          </router-link >
        </swiper-slide>
    </swiper>
    </div>
    <div v-else>
      <skeleton-carousel />
    </div>
</div>
</template>

<style scoped>

.title-size {
  font-size:1.6rem;
}

@media (min-width: 600px) {
  .car-height {
    height: 40vh;
  }
}

@media (min-width: 1000px) {
  .title-size {
    font-size: 4rem;
    margin-bottom: 1.6rem;
  }
}
</style>

<script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import SkeletonCarousel from '../Carousels/SkeletonCarousel.vue'

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
        'sports',
    ],
    components: {
      Swiper,
      SwiperSlide,
      SkeletonCarousel
      
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
      }
    },
    computed: {
      slidesMin() {
        let slides

        if(this.sports && this.sports.length > 3) {
          slides = 4
        }
        else if(this.sports && this.sports.length == 2) {
          slides = 2
        }
        else {
          slides = 3
        }

        return slides
      },
      slidesMax() {
        let slides = 3

        if(this.sports && this.sports.length <= 2) {
          slides = 2
        }

        return slides
      },
      showNav() {
        if(window.innerWidth <= 600) {
          return false
        }
        else if(window.innerWidth > 600) {
          return true
        }
      }
    }
  }
</script>