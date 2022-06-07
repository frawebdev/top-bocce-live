<template>
    <q-page>
        <video width="400" height="300" controls style="width: 100%; height: 100vh;" ref="videoPlayer" class="focusable" autoplay>
            <source v-if="videoUrl" :src="videoUrl[0].link" type="video/mp4">
        </video>
        <!-- <q-responsive :ratio="16/9" v-else>
        <q-skeleton />
        </q-responsive>  -->
        <!-- <transition
        appear 
        enter-active-class="animated fadeInUp"
        >
        <h4 v-if="$route.params.name" class="q-ml-md q-mt-sm q-mb-lg text-white text-bold">{{ $route.params.name }}</h4>
        </transition>
        <episodes-carousel 
        v-if="likeThis"
        title="Contenuti simili"
        :content="likeThis"
        /> -->
        <!--
        <q-page-sticky position="bottom" :offset="[0, 18]">
            <q-btn fab icon="fast_rewind" color="primary" class="focusable q-mx-sm" padding="md" @click="$refs.videoPlayer.currentTime = $refs.videoPlayer.currentTime - 5"/>
            <q-btn fab icon="play_arrow" color="primary" class="focusable q-mx-sm" padding="md" @click="$refs.videoPlayer.play()"/>
            <q-btn fab icon="pause" color="primary" class="focusable q-mx-sm" padding="md" @click="$refs.videoPlayer.pause()"/>
            <q-btn fab icon="fast_forward" color="primary" class="focusable q-mx-sm" padding="md" @click="$refs.videoPlayer.currentTime = $refs.videoPlayer.currentTime + 5"/>
        </q-page-sticky> -->
    </q-page>
</template>

<script>
import axios from 'axios'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'

export default {
    components: {
        EpisodesCarousel
    },
    data() {
        return {
            videoUrl: null,
            likeThis: null
        }
    },
    mounted() {

        this.$refs.videoPlayer.requestFullscreen()

        if(!this.$route.params.id && this.$route.params.sport) {
            this.$router.push('/')
        }
        
        const config = {
            headers: { Authorization: 'Bearer 1f8cc8e07ec1c276249d1bae95eb697d' }
        }

        axios.get(`https://fast-peak-73010.herokuapp.com/https://api.vimeo.com/videos/${this.$route.params.id}`, config)
            .then(res => {
                this.videoUrl = res.data.files.filter(file => {
                return file.quality == 'hd'
                })
            })

        this.$api.get(`/wp/v2/movie?movie_genre=${this.$route.params.sport}`)
            .then(res => {
                this.likeThis = res.data
            })

    }
}
</script>

