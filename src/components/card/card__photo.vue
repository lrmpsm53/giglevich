<template >
    <img v-if="photo" v-bind:src="photo" v-on:click="show_big_image" class="card__photo">
</template>

<style lang="sass" scoped>
.card__photo
    margin-top: 40px
    width: 100%
    cursor: pointer
</style>

<script>
import store from '../../store.js'

export default {
    props: ['photo'],
    methods: {
      show_big_image: function(){
        document.body.style.overflow = 'hidden';
        store.commit('image')
      }
    }
}
</script>