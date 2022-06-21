<template>
    <main class="carousel-x-padding">
      <div class="q-ma-lg" v-if="content">
      <h4 class="q-mb-sm text-white text-bold fadeInAnimation">{{ title }}
        <br>
        <span class="view-all-text">
          <router-link :to="{ name: 'view-all-seasons' }" style="text-decoration: none; color: grey;">
            Guarda tutti
          </router-link>
        </span>
      </h4>
      <swiper
      class="fadeInAnimation"
          :modules="modules"
          :space-between="20"
          :navigation="showNav"
          :breakpoints="{
              0: {
                  slidesPerView: 1.1
              },
              640: {
                  slidesPerView: 3
              },
              1200: {
                  slidesPerView: 4
              }
          }"
      >
          <swiper-slide 
          :style="`background-image: url('${season.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`" 
          class="carousel-bg-sm"
          v-for="season in content" 
          :key="season.id"
          >
            <router-link 
            :to="{ name: 'season', params: { id: season.slug, name: season.name, image: season.thumbnail_url } }"
            class="column justify-center text-white text-center focusable link-style" 
            >
                <div style="margin: 5px 13px;">
                    <h6 class="q-ma-xs text-bold">{{ season.name }}</h6> 
                </div>
            </router-link>
          </swiper-slide>
      </swiper>
      </div>
      <div v-else>
        <skeleton-carousel />
      </div>
    </main>
</template>
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
        'content'
    ],
    components: {
      Swiper,
      SwiperSlide,
      SkeletonCarousel
    },
    computed: {
        showNav() {
        if(window.innerWidth <= 600) {
          return false
        }
        else if(window.innerWidth > 600) {
          return true
        }
      }
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
      }
    },
  }
</script>