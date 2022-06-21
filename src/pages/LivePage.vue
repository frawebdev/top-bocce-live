<template>
    <q-page>
        <sport-banner 
            title="Eventi live"
        />
            <episodes-grid 
            :episodes="sortedEpisodes"
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
            filteredEpisodes: {}
        }
    },
    async mounted() {
        this.episodes = await this.$api.get(`/wp/v2/video`)
            .then(res => {
                this.episodesPages = parseInt(res.headers['x-wp-totalpages'])
                return res.data
            })
            .catch(err => console.log(err))
    },
    methods: {
        async getNPage(page) {
            this.episodes = null
            this.episodes = await this.$api.get(`/wp/v2/video?page=${page}`)
                .then(res => res.data)
        }
    },
    computed: {
        sortedEpisodes: function() {
            if(this.episodes) {
                return this.episodes.sort((a, b) => (a.is_live > b.is_live ? -1 : 1))
            }
        }
    }
}
</script>