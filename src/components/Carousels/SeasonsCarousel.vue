<template>
    <main class="carousel-x-padding">
      <div class="q-ma-lg" v-if="content">
      <transition
      appear 
      enter-active-class="animated fadeInUp"
      >
      <h4 class="q-mb-sm text-white text-bold">{{ title }}
        <br>
        <span class="text-subtitle2">
          <router-link :to="{ name: 'view-all-seasons' }" style="text-decoration: none; color: grey;">
            Guarda tutti
          </router-link>
        </span>
      </h4>
      </transition>
      <swiper
          :modules="modules"
          :space-between="20"
          navigation
          :breakpoints="{
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
            class="column justify-center text-white text-center focusable" 
            style="height: 100%; width: 100%;"
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
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
      }
    },
  }
</script>