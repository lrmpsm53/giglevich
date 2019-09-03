<template>
    <transition name="unit">
    <div class="app__about-progect">
        <about-progect></about-progect>
    </div>
    </transition>
</template>

<style lang="sass" scoped>
    .app__about-progect
        margin: 
            top: 400px
            left: auto
            right: auto
</style>

<script>
import about_project from '../about-project.vue'
export default {
    components: {
        'about-progect': about_project
    }
}
</script>