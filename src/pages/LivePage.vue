<template>
    <q-page>
        <sport-banner 
            title="Eventi live"
        />
            <episodes-grid 
            v-if="sortedEpisodes && sortedEpisodes > 0"
            :episodes="sortedEpisodes"
            :pages="episodesPages"
            @changePage="getNPage"
            />
            <div class="text-grey q-mx-md q-mt-lg text-h5" v-else>Nessun evento disponibile al momento</div>
            <q-separator />
            <q-expansion-item
            expand-separator
            label="Calendario eventi"
            dark
            style="font-size: 1.5rem;"
            class="q-mt-md"
            >
                <q-list dark bordered separator style="padding: 0.5rem;" v-if="events">
                    <q-item v-for="event in sortedEvents" :key="event.id">
                        <q-item-section>
                            <q-item-label style="font-size: 1.5rem; margin-bottom: 1rem;">{{ event.acf.data_evento }}</q-item-label>
                            <q-item-label style="font-size: 1.2rem;">{{ event.title.rendered }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>
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
            filteredEpisodes: {},
            events: null
        }
    },
    async mounted() {
        this.events = await this.$api.get('/wp/v2/calendario')
            .then(res => res.data)

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
        },
        sortedEvents: function() {
            if(this.events) {
                return this.events.sort((a, b) => (a.afc.data_evento > b.afc.data_evento ? -1 : 1))
            }
        }
    }
}
</script>