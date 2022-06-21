<template>
    <video class="fadeInAnimation video-position" width="400" height="300" ref="videoPlayer" :controls="screenSize < 1500 ? true : false">
        <source :src="url" type="video/mp4">
    </video> 
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        screenSize: {
            type: Number,
            default: 0
        }
    }
}
</script>