<template>
    <q-img
    v-if="image"
    class="live-banner"
    :ratio="16/9"
    :src="image"
    @click="$router.push({ name: 'live-page' })"
    />
    <q-skeleton 
    height="25vh"
    v-else
    >
    </q-skeleton>
</template>

<style scoped>

</style>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    }
}
</script>