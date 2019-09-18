<template>
    <nav>
        <nav__routs></nav__routs>
    </nav>
</template>

<style lang="sass" scoped>
    nav
        user-select: none
        text-align: center
        width: 100%
        background-color: #ffffffe8
        padding:
            top: 20px
            bottom: 20px
</style>

<script>
import routs from './nav__routs.vue';
export default {
    components: {
        'nav__routs': routs
    }
}
</script>