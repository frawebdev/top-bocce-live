<template>
    <q-page>
        <sport-banner 
            title="Episodi"
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
            episodes: {},
            episodesPages: 0,
            filteredEpisodes: {}
        }
    },
    async mounted() {
        this.episodes = await this.$api.get(`/wp/v2/movie`)
            .then(res => {
                this.episodesPages = parseInt(res.headers['x-wp-totalpages'])
                return res.data
            })
            .catch(err => console.log(err))
    },
    methods: {
        async getNPage(page) {
            this.episodes = null
            this.episodes = await this.$api.get(`/wp/v2/movie?page=${page}`)
                .then(res => res.data)
        }
    }
}
</script>