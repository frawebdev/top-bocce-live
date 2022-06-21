<template>
    <q-page class="column flex-center">
        <q-header style="background-color: transparent;">
            <q-toolbar>
                <button class="video-back-btn q-mx-sm" @click="$router.go(-1)"><q-icon name="arrow_back" /></button>
            </q-toolbar>
        </q-header>
        <FromVimeoLink 
        v-if="Array.isArray(videoUrl)"
        :url="videoUrl[0].link"
        />
        <FromVimeoIframe 
        v-else-if="videoUrl && videoUrl.includes('vimeo')"
        :url="$route.params.id"
        />
        <iframe
        v-else-if="videoUrl && videoUrl.includes('youtube')"
        :src="$route.params.id"
        frameborder="0"
        allowfullscreen
        class="fadeInAnimation video-position"
        />
        <q-page-sticky position="bottom" :offset="[0, 35]" v-if="screenSize > 1500">
            <button class="btn-style focusable q-mx-sm" @click="$router.go(-1)"><q-icon name="close" /></button>
            <button class="player-style focusable q-mx-sm" @click="$refs.videoPlayer.currentTime = $refs.videoPlayer.currentTime - 10"><q-icon name="fast_rewind" /></button>
            <button 
            v-if="!isPlaying"
            class="player-style focusable q-mx-sm" 
            @click="playVideo"
            >
            <q-icon name="play_arrow" />
            </button>
            <button 
            v-else
            class="player-style focusable q-mx-sm"
             @click="pauseVideo"
             >
             <q-icon name="pause" />
             </button>
            <button class="player-style focusable q-mx-sm" @click="$refs.videoPlayer.currentTime = $refs.videoPlayer.currentTime + 10"><q-icon name="fast_forward" /></button>
        </q-page-sticky>
        <div class="time text-white" v-if="screenSize > 1500">{{ currentVideoTime }} / {{ videoDuration }}</div>
    </q-page>
</template>

<style scoped>

.time {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.player-style {
    background-color: #0074a5;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
}

.btn-style {
    background-color: #575858;
    color: white;
    border: none;
    font-size: 2rem;
}

.video-back-btn {
    border: none;
    background-color: #0074a5;
    margin-top: 8px;
    border-radius: 5px;
    font-size: 1.5rem;
    color: white;
    border-radius: 50%;
    z-index: 999;
    width: 50px;
    height: 50px;
}

</style>

<script>
import axios from 'axios'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'
import FromVimeoLink from '../components/Videos/FromVimeoLink.vue'
import FromVimeoIframe from '../components/Videos/FromVimeoIframe.vue'

export default {
    components: {
        EpisodesCarousel,
        FromVimeoLink,
        FromVimeoIframe
    },
    data() {
        return {
            isPlaying: false,
            videoUrl: null,
            currentVideoTime:'00:00:00',
            videoDuration: '00:00:00',
            screenSize: null
        }
    },
    mounted() {

        this.screenSize = window.innerWidth

        window.addEventListener('resize', () => {
            this.screenSize = window.innerWidth
        }) 

        if(this.$refs.VideoPlayer) {
            this.$refs.videoPlayer.onplay = () => {
                let videoDurationTime = this.$refs.videoPlayer.duration
                let VideoDurationConversion = new Date(videoDurationTime * 1000).toISOString().slice(11, 19)
                this.videoDuration = VideoDurationConversion
            }
            
            this.$refs.videoPlayer.ontimeupdate = () => {
                let currentTime = this.$refs.videoPlayer.currentTime
                let currentTimeConversion = new Date(currentTime * 1000).toISOString().slice(11, 19)
                this.currentVideoTime = currentTimeConversion
            }
        }

        if(!this.$route.params.id && this.$route.params.sport) {
            this.$router.push('/')
        }
        
        const config = {
            headers: { Authorization: 'Bearer 1f8cc8e07ec1c276249d1bae95eb697d' }
        }

        if(
            this.$route.params.id
            && !this.$route.params.id.includes('vimeo') 
            && !this.$route.params.id.includes('youtube') 
            && !this.$route.params.id.includes('watch')
            ) {
            axios.get(`https://fast-peak-73010.herokuapp.com/https://api.vimeo.com/videos/${this.$route.params.id}`, config)
                .then(res => {
                    this.videoUrl = res.data.files.filter(file => {
                    return file.quality == 'hd'
                    })
                })
        }
        else {
            this.videoUrl = this.$route.params.id
        }

    },
    methods: {
        playVideo() {
            this.isPlaying = true
            this.$refs.videoPlayer.play()
        },
        pauseVideo() {
            this.isPlaying = false
            this.$refs.videoPlayer.pause()
        }
    }
}
</script>

