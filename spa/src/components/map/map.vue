<template>
    <article class="map">
        <map__render></map__render>
    </article>
</template>

<style lang="sass" scoped>
    .map
        width: 100%
</style>

<script>
import map__render from './map__render.vue'
export default {
    components: {
        'map__render': map__render
    }
}
</script>