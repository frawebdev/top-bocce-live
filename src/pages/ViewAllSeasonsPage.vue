<template>
    <q-page>
        <sport-banner 
            title="Stagioni"
        />
            <episodes-grid 
            :episodes="episodes"
            :pages="episodesPages"
            @changePage="getNPage"
            />
    </q-page>
</template>

<script>
//components
import SportBanner from '../components/Banners/SportBanner.vue'
import EpisodesGrid from '../components/Grids/EpisodesGrid.vue'

export default {
    components: {
        SportBanner,
        EpisodesGrid
    },
    data() {
        return {
            episodes: null,
            episodesPages: 0,
            filteredEpisodes: null
        }
    },
    async mounted() {
        this.episodes = await this.$api.get(`/wp/v2/movie_genre`)
            .then(res => {
                this.episodesPages = parseInt(res.headers['x-wp-totalpages'])
                return res.data
            })
            .catch(err => console.log(err))
    },
    methods: {
        async getNPage(page) {
            this.episodes = null
            this.episodes = await this.$api.get(`/wp/v2/movie_genre?page=${page}`)
                .then(res => res.data)
        }
    }
}
</script>