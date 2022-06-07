<template>
<div>
    <div v-if="content" class="banner q-mt-xl column flex-center carousel-bg" :style="`background-image: url(${content.image}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`">
      <div class="text-left text-white q-pa-md row" style="margin: 0 13px 0 13px;">
        <div class="col-12 col-md-6">
          <transition 
          appear 
          enter-active-class="animated fadeInUp"
          >
          <h4 class="text-bold banner-text q-my-sm">{{ content.title.rendered }}</h4>
          </transition>
          <p v-html="content.excerpt.rendered" class="banner-subtitle"></p>
          <q-btn
          class="base-btn focusable"
          >
          Vai
          </q-btn>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
    <q-skeleton width="100%" height="40vh" class="banner" v-else/>
</div>
</template>

<script>
import SkeletonCarousel from '../Carousels/SkeletonCarousel.vue'

export default {
  props: [
    'content'
  ],
  components: {
    SkeletonCarousel
  }
}
</script>