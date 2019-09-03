<template>
<img class="big-image__photo" v-bind:src="photo">
</template>

<style lang="sass" scoped>
.big-image__photo
    width: 100%
    margin-bottom: 20px
</style>

<script>
export default {
    props: ['photo']
}
</script>