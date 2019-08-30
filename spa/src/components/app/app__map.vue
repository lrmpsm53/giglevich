<template>
    <div class="app__map">
        <v-map></v-map>
    </div>
</template>

<style lang="sass" scoped>
     .app__map
        margin-top: 200px;
</style>

<script>
import map from  '../map/map.vue'
export default {
    components: {
        'v-map': map
    }
}
</script>