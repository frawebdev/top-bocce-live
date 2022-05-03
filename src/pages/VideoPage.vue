<template>
    <q-page>
        <video width="400" height="300" controls v-if="videoUrl" style="width: 100%; height: auto;">
            <source :src="videoUrl[0].link" type="video/mp4">
        </video>
        <q-skeleton v-else width="100%" height="200px" />
        <episodes-carousel 
        v-if="likeThis"
        title="Contenuti simili"
        :content="likeThis"
        />
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
        const config = {
            headers: { Authorization: 'Bearer 1f8cc8e07ec1c276249d1bae95eb697d' }
        }

        axios.get(`https://api.vimeo.com/videos/${this.$route.params.id}`, config)
            .then(res => {
                this.videoUrl = res.data.files.filter(file => {
                return file.quality == 'hd'
                })
            })

        axios.get(`https://www.elev8ted.it/fib/wp-json/fib/v1/episode?sport=${this.$route.params.sport}`)
            .then(res => {
                this.likeThis = res.data
            })
    }
}
</script>

