<template>
    <q-page>
        <season-banner 
        v-if="SeasonsContainer"
        :image="SeasonsContainer.thumbnail_url"
        :title="SeasonsContainer.title.rendered"
        :excerpt="SeasonsContainer.excerpt.rendered"
        />
        <q-skeleton height="250px" v-else/>
        <q-select 
        filled 
        square
        v-model="selectedSeason" 
        :options="seasonsNames" 
        bg-color="white" 
        label="Scegli lo sport" 
        label-color="cyan-9"
        />
        <episodes-carousel 
        v-if="episodes"
        title="Gli episodi"
        :content="episodes"
        />
        <skeleton-carousel class="q-mt-xl" v-else/>
    </q-page>
</template>

<script>
import axios from 'axios'
//components
import SeasonBanner from '../components/Banners/SeasonBanner.vue'
import EpisodesCarousel from '../components/Carousels/EpisodesCarousel.vue'
import SkeletonCarousel from '../components/Carousels/SkeletonCarousel.vue'

export default {
    data() {
        return {
            SeasonsContainer: null,
            seasonsNames: [],
            selectedSeason: null,
            episodes: null
        }
    },
    components: {
        SeasonBanner,
        EpisodesCarousel,
        SkeletonCarousel
    },
    async mounted() {
        this.SeasonsContainer = await axios.get(`https://www.elev8ted.it/fib/wp-json/wp/v2/tv_show/${this.$route.params.id}`)
            .then(res => {
                return res.data
            })

        this.selectedSeason = this.SeasonsContainer.episodes[0].name
            
        for (let i = 0; i < this.SeasonsContainer.episodes.length; i++) {
            this.seasonsNames.push(this.SeasonsContainer.episodes[i].name)
        }
    },
    watch: {
        selectedSeason: function(newVal, oldVal) {
            const result = this.SeasonsContainer.episodes.filter(val => {
                return val.name === newVal
            })

            if(result[0]) {
                const episodesJoin = result[0].episodes.join()
                axios.get(`https://www.elev8ted.it/fib/wp-json/wp/v2/episode?include=${episodesJoin}`)
                    .then(res => {
                        this.episodes = res.data
                    })
            }
        }
    }
}
</script>