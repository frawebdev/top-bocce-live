<template>
    <q-page>
        <season-banner 
        v-if="SeasonsContainer"
        :image="thumbnail_url"
        :title="name"
        />
        <q-skeleton height="250px" v-else/>
        <episodes-carousel 
        v-if="episodes"
        title="Gli episodi"
        :content="episodes"
        />
        <skeleton-carousel class="q-mt-xl" v-else/>
    </q-page>
</template>

<script>
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
            episodes: null,
            name: null,
            thumbnail: null
        }
    },
    components: {
        SeasonBanner,
        EpisodesCarousel,
        SkeletonCarousel
    },
    async mounted() {
        this.name = this.$route.params.name
        this.thumbnail_url = this.$route.params.image

        if(!this.$route.params.name || !this.$route.params.image) {
            this.$router.push('/')
        }

        this.SeasonsContainer = await this.$api.get(`/fib/v1/movie?movie_genre=${this.$route.params.id}`)
            .then(res => {
                return res.data
            })

        const episodesJoin = this.SeasonsContainer.join()

        this.$api.get(`/wp/v2/movie?include=${episodesJoin}`)
            .then(res => {
                this.episodes = res.data
            })
    },
}
</script>