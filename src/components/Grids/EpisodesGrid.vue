<template>
    <div class="q-ma-md">
        <div class="q-pa-md flex flex-center">
            <q-pagination 
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
            <q-img :src="episode.thumbnail_url" class="bg-grey" :class="episode.video_url || episode.name ? '' : 'avaliability'">
                <div class="absolute-bottom column justify-center" style="height: 100%;">
                    <div>
                        <div v-if="episode.title">
                            <div class="text-h6 text-center" v-html="episode.title.rendered"></div>
                        </div>
                        <div v-if="episode.name">
                            <div class="text-h6 text-center">{{ episode.name }}</div>
                        </div>
                        <div v-if="!episode.video_url && !episode.name" class="text-center text-grey">
                            Non disponibile
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
    </div>
</template>

<script>
export default {
    props: ['episodes', 'pages'],
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
            else if (ep.video_url) {
                this.$router.push({ name: 'video', params: { id: ep.video_url, sport: ep.episode_sport, name: ep.title.rendered } })
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