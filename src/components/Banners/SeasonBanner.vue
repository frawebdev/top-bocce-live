<template>
    <div class="banner column flex-center" :style="`background-image: url(${image}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`">
        <div class="text-left text-white q-pa-md">
          <transition 
          appear 
          enter-active-class="animated fadeInUp"
          >
          <h4 class="banner-text">{{ title }}</h4>
          </transition>
        </div>
    </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 40vh;
  background-color: grey;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
}
</style>

<script>
export default {
  props: [
    'image',
    'title',
    'excerpt'
  ]
}
</script>