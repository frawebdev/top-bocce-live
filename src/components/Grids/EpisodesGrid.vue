<template>
    <div class="q-ma-md">
        <div class="q-pa-md flex flex-center"
            >
            <q-pagination 
            v-show="episodes"
            v-model="currentPage"
            :max="pages"
            input
            input-class="text-white"
            />
        </div>
        <div class="row q-col-gutter-md" v-if="episodes">
            <q-card 
            class="my-card col-12 col-sm-6 col-md-4 bg-transparent" 
            v-for="episode in episodes" 
            :key="episode.id"
            @click="redirectTo(episode)"
            >
            <q-img v-if="episode.thumbnail_url" :src="episode.thumbnail_url" class="bg-grey">
                <div class="absolute-bottom column justify-center" style="height: 100%;">
                    <div>
                        <div v-if="episode.title">
                            <div class="text-h5 text-center" v-html="episode.title.rendered"></div>
                        </div>
                        <div v-if="episode.name">
                            <div class="text-h5 text-center">{{ episode.name }}</div>
                        </div>
                        <div v-if="!episode.video_url && !episode.name && episode.is_live === null" class="text-center text-grey">
                            Non disponibile
                        </div>
                        <div v-else-if="episode.is_live === 1" class="text-center live-now text-bold">
                            <button><p>LIVE ORA</p></button>
                        </div>
                        <div v-else-if="episode.is_live === 0" class="text-center">
                            Programmato per 01/01/22<br>
                            Alle 12:00
                        </div>
                    </div>
                </div>
            </q-img>
            </q-card>
        </div>
        <div class="row q-col-gutter-md" v-else>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <q-skeleton 
                height="200px"
                />
            </div>
        </div>
        <div class="q-pa-md flex flex-center"
            >
            <q-pagination 
            v-show="episodes"
            v-model="currentPage"
            :max="pages"
            input
            input-class="text-white"
            />
        </div>
    </div>
</template>

<style>

.live-now button {
    background-color: red;
    border: none;
}

.live-now button p {
    color: white;
    padding: 0.5rem;
    font-size: 1.3rem;
    margin: 0;
    animation-name: zoomin;
    animation-duration: 1s;
    animation-iteration-count:infinite;
}

@keyframes zoomin {
    from {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>

<script>
export default {
    // props: ['episodes', 'pages'],
    props: {
        episodes: {
            type: Object,
            default: null
        },
        pages: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    methods: {
        redirectTo(ep) {
            if(ep.taxonomy) {
                this.$router.push({ name: 'season', params: { id: ep.slug, name: ep.name, image: ep.thumbnail_url } })
            } 
            else if (ep.video_url && !ep.embed_url) {
                this.$router.push({ name: 'video', params: { id: ep.video_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
            }
            else if (ep.embed_url) {
                this.$router.push({ name: 'video', params: { id: ep.embed_url, name: ep.title.rendered, movie_id: ep.id, views: ep.views } })
            }
        }   
    },
    watch: {
        currentPage: function(newVal, oldVal) {
            this.$emit('changePage', newVal)
        }
    }
}
</script>