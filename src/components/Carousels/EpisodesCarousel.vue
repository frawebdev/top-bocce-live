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
        <router-link :to="{ name: 'view-all-episodes' }" style="text-decoration: none; color: grey;">
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
        :style="`background-image: url('${episode.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`" 
        v-for="episode in content" 
        class="carousel-bg-sm"
        :class="episode.video_url ? '' : 'avaliability'"
        :key="episode.id"
        @click="$router.push({ name: 'video', params: { id: episode.video_url, sport: episode.movie_genre[0], name: episode.title.rendered } })"
        >
          <router-link 
          class="column justify-center focusable" style="height: 100%; width: 100%;"
          :to="{ name: 'video', params: { id: episode.video_url || null, sport: episode.movie_genre[0], name: episode.title.rendered } }"
          >
              <div style="margin: 5% 10% 5% 10%;" class="text-white text-center">
                  <h6 class="q-my-xs text-bold" v-if="episode.title.rendered" v-html="episode.title.rendered"></h6>
                  <h6 class="q-my-xs text-bold" v-else-if="episode.title">{{ episode.title }}</h6>
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