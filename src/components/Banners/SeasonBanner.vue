<template>
    <div class="banner column flex-center" :style="`background-image: url(${image}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`">
        <div class="text-left text-white q-pa-md">
          <h4 class="q-mb-sm">{{ title }}</h4>
          <p v-html="excerpt"></p>
        </div>
    </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
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