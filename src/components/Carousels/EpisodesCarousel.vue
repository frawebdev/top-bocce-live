<template>
  <main class="carousel-x-padding">
    <div class="q-ma-lg" v-if="content">
    <transition
    appear 
    enter-active-class="animated fadeInUp"
    >
    <h4 class="q-mb-sm text-white text-bold fadeInAnimation">{{ title }} 
      <br>
      <span class="view-all-text">
        <router-link :to="{ name: 'view-all-episodes' }" style="text-decoration: none; color: grey;">
          Guarda tutti
        </router-link>
      </span>
    </h4>
    </transition>
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
        :style="`background-image: url('${episode.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`" 
        v-for="episode in content" 
        class="carousel-bg-sm"
        :class="episode.video_url || episode.embed_url ? '' : 'avaliability'"
        :key="episode.id"
        @click="redirectTo(episode)"
        >
          <router-link 
          class="column justify-center focusable link-style"
          :to="{ name: 'video', params: { id: episode.video_url || null, name: episode.title.rendered, views: episode.views } }"
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
    methods: {
      // remoteClick(e, video_url, genre, title) {
      //   if(e.keyCode === 13) {
      //     alert(e.keyCode)
      //     this.$router.push({ name: 'video', params: { id: video_url, sport: genre, name: title } })
      //   }
      // },
      redirectTo(ep) {
        if (ep.video_url && !ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.video_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
        }
        else if (ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.embed_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
        }
      }
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