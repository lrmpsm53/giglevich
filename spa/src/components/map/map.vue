<template>
    <article class="map">
        <map__headline>
            <headline h="2" position="center" size="36px">
                <template v-slot:first>Икона: </template>
                <template v-slot:second>интерактивная карта</template>
            </headline>
        </map__headline>
        <map__render v-if="show"></map__render>
        <map__notice v-else></map__notice>
    </article>
</template>

<style lang="sass" scoped>
    .map
        width: 100%
</style>

<script>
import map__render from './map__render.vue'
import map__headline from './map__headline.vue'
import map__notice from './map__notice.vue'

export default {
    components: {
        'map__render': map__render,
        'map__headline': map__headline,
        'map__notice': map__notice
    },
    computed: {
        show: function() {
            if (window.innerWidth > 1024){
            return true 
            }else  return false
        }
    }
}
</script>