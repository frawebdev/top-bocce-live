<template>
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="400px"
        class="bg-dark text-white"
      >
        <q-carousel-slide 
        v-for="(episode, index) in content" :key="episode.id"
        :name="index" 
        class="column no-wrap flex-center" 
        :img-src="episode.thumbnail_url"
        >
          <div class="q-mt-md text-left">
            <h4 class="q-mb-xs q-mt-xs text-uppercase text-bold">{{ episode.title.rendered }}</h4>
            <p class="q-mb-lg" v-html="episode.excerpt.rendered"></p>
            <q-btn
            v-ripple
            style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
            v-if="episode.episode_url "
            :to="{ name: 'video', params: { id: episode.episode_url } }"
            >
            Guarda
            </q-btn>
            <p v-else>Non disponibile</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
</template>

<script>
import { ref } from 'vue'

export default {
  props: [
    'content'
  ],
  setup () {
    return {
      slide: ref(0),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>