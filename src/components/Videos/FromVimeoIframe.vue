<template>
    <iframe
    class="video-responsive-item fadeInAnimation video-position"
    :src="url" 
    width="640" 
    height="360" 
    frameborder="0" 
    allow="autoplay; fullscreen;" 
    allowfullscreen
    ></iframe> 
</template>

<script>
export default {
    props: {
        url: {
            type: String || Boolean,
            required: true
        }
    }
}
</script>