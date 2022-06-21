<template>
  <main class="carousel-x-padding">
    <div class="q-ma-none" v-if="content">
    <swiper
        :modules="modules"
        :space-between="20"
        navigation
        :slidesPerView="1"
        class="fadeInAnimation"
    >
        <swiper-slide 
        :style="`background-image: url('${episode.thumbnail_url}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`" 
        v-for="episode in content" :key="episode.id"
        class="row carousel-bg"
        >
          <div class="column justify-center col-12 col-md-6">
              <div style="margin: 5% 10% 5% 10%;" class="text-white">
                  <h6 v-if="episode.title.rendered" class="q-my-sm text-bold title q-mx-none slideUpAnimation" v-html="episode.title.rendered"></h6>
                  <h6 v-else-if="episode.title" class="q-ma-xs text-bold slideUpAnimation" >{{ episode.title }}</h6>
                  <q-btn
                  style="background-color: #0074a5; border-radius: 0; border: 1px solid white slideUpAnimation"
                  v-if="episode.video_url" 
                  class="q-mt-md q-mx-sm"
                  @click="redirectTo(episode)"
                  >
                  Vai al video
                  <q-icon name="play_arrow" />
                  </q-btn>
                  <p 
                  v-else
                  > 
                  Non Disponibile
                  </p>
              </div>
          </div>
          <div class="col"></div>
        </swiper-slide>
    </swiper>
    </div>
    <div v-else>
      <q-skeleton width="100%" height="60vh" />
    </div>
  </main>
</template>

<style scoped>
.title {
    font-size: 4rem;
    line-height: 1;
}

@media (max-width: 479px) {
    .title {
        font-size: 1.2rem;
    }
}

@media (max-width: 767px) {
    .title {
        font-size: 1.8rem;
    }
}

@media (max-width: 991px) {
    .title {
        font-size: 2.5rem;
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
        'content'
    ],
    components: {
      Swiper,
      SwiperSlide,
      SkeletonCarousel
    },
    methods: {
      redirectTo(ep) {
        if (ep.video_url && !ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.video_url, name: ep.title.rendered } })
        }
        else if (ep.embed_url) {
          this.$router.push({ name: 'video', params: { id: ep.embed_url, name: ep.title.rendered } })
        }
      }
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y],
      }
    }
  }
</script>