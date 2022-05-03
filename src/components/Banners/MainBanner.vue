<template>
    <div class="banner q-mt-xl column flex-center" :style="`background-image: url(${content.image}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-blend-mode: overlay; background-position: center; background-size: cover;`">
      <div class="text-left text-white q-pa-md" style="margin: 0 13px 0 13px;">
        <h5 class="text-bold q-mb-md q-mt-xs">{{ content.title.rendered }}</h5>
        <p v-html="content.excerpt.rendered"></p>
        <q-btn
        style="background-color: #0074a5; border-radius: 0; border: 1px solid white"
        >
        Vai
        </q-btn>
      </div>
    </div>
</template>

<style scoped>
.banner {
  width: 100%;
  background-color: grey;
}
</style>

<script>
export default {
  props: [
    'content'
  ]
}
</script>