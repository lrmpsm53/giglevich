<template>
    <transition name="unit">
    <div class="app__map">
        <v-map></v-map>
    </div>
    </transition>
</template>

<style lang="sass" scoped>
     .app__map
        margin-top: 350px;
</style>

<script>
import map from  '../map/map.vue'
export default {
    components: {
        'v-map': map
    }
}
</script>