<template>
    <button v-on:click="close" class="paragraph button card__button">закрыть</button>
</template>

<style lang="sass" scoped>
.button
    outline: none
    font-family: Open Sans Condensed Light
    font-size: 18px
    background-color: #d63c37
    color: #ffffff
    border: none
    cursor: pointer
    margin-top: 10px
</style>

<script> 
  import store from '../store.js'
export default {
    props: ['object'],
    methods: {
      close: function(){
        if (this.object == 'render_card'){
        store.commit('card')
        }
        else {
          store.commit('image');
          setTimeout(function(){
            document.body.style.overflow = 'auto';
          }, 300)
        }
      }
    }
}
</script>