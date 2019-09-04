<template>
    <transition name="unit">
    <div>
        <about-icon></about-icon>
    </div>
    </transition>
</template>

<style lang="sass" scoped>
div
    margin-top: 350px
    width: 100%

</style>

<script>
import about_icon from '../about-icon/about-icon.vue'
export default {
    components: {
        'about-icon': about_icon
    }
}
</script>