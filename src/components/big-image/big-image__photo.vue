<template>
<img class="big-image__photo" v-bind:src="photo">
</template>

<style lang="sass" scoped>
.big-image__photo
    width: 99%
    margin-bottom: 20px
    padding: 
        top: .5%
        left: .5%
        right: .5%
</style>

<script>
export default {
    props: ['photo']
}
</script>