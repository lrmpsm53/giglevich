<template>
    <div class="big-image">
        <big-image__photo v-bind:photo="photo"></big-image__photo>
        <close-button object="big_image"></close-button>
    </div>
</template>

<style lang="sass" scoped>
.big-image
    width: 80%
    position: fixed
    top: 2%
    left: 10%
    z-index: 10
    overflow-x: hidden
    overflow-y: auto
    max-height: 90%
    background-color: #ffffffee
    box-shadow: 0px 500px 500px 300px black
</style>

<script>
import big_image__photo from './big-image__photo.vue' 
export default {
    components: {
        'big-image__photo': big_image__photo
    },
    props: ['photo'],
    mounted() {
        console.log(this.photo)
    }
}
</script>