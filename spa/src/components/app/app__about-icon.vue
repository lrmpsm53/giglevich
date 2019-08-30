<template>
    <div>
        <about-icon></about-icon>
    </div>
</template>

<style lang="sass" scoped>
div
    margin-top: 100px
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