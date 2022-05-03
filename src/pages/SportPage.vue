<template>
    <q-page>
        <sport-banner />
        <div class="q-pa-md">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 column flex-center" :style="`min-height: 200px; background-image:url(${episode.thumbnail_url}); background-position: center; background-size: cover;`" v-for="episode in filteredEpisodes" :key="episode.id">
                    <div style="margin: 5% 10% 5% 10%;">
                        <h5 class="q-mb-xs">{{ episode.title.rendered }}</h5>
                        <p v-html="episode.excerpt.rendered"></p>
                        <q-btn>
                            Vai
                        </q-btn>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' 
import axios from 'axios'
//components
import SportBanner from '../components/Banners/SportBanner.vue'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'

export default {
    components: {
        SportBanner,
        EpisodesCarousel
    },
    setup() {
        const router = useRoute()
        const episodes = ref(null)
        const filteredEpisodes = ref(null)

        onMounted( async () => {
            episodes.value = await axios.get('https://www.elev8ted.it/fib/wp-json/wp/v2/episode?per_page=100')
                .then(res => {
                    return res.data
                })
                .catch(err => console.log(err))

            filteredEpisodes.value = episodes.value.filter(ep => ep.episode_sport == router.params.name)
        })

        return {
            filteredEpisodes
        }
    }
}
</script>