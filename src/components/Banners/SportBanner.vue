<template>
    <div 
    class="banner flex flex-center text-white" 
    :style="`background-image: url('https://www.topbocce.live/wp-content/uploads/2022/05/BANNER-1-1024x576-1.png'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-position: center; background-size: cover; background-blend-mode: overlay;`"
    >
    <transition 
    appear 
    enter-active-class="animated fadeInUp"
    >
    <h4 class="banner-text">{{ title }}</h4>
    </transition>
    </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 40vh;
}
</style>

<script>
export default {
  props: ['title']
}
</script>