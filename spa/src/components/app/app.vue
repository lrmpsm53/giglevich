<template>
  <div>
      <v-nav></v-nav>
      <transition name="section">
      <router-view></router-view>
      </transition>
      <app__footer>
        <v-footer>
        </v-footer>
      </app__footer>
</div>
</template>
<style lang="sass">
@font-face
    font-family: Play Bold
    src: url('../../fonts/Play/Play-Bold.ttf')

@font-face
    font-family: Open Sans Condensed Light
    src: url('../../fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf')

body
    width: 100%
    box-sizing: border-box

*
  padding: 0
  margin: 0

@keyframes show-toggle-section
  0%
    opacity: 0
    transform: translateY(600px)
  75%
    transform: translateY(-100px)
  100%
    opacity: 1

@keyframes hidden-toggle-section
  0%
    opacity: 1
  75%
    transform: translateY(600px)
  100%
    opacity: 0
    transform: translateY(-100px)


.section-enter-to, section-enter-active
  animation: show-toggle-section 0.75s ease-in

.section-leave-to, section-leave-active
  animation: hidden-toggle-section 0.75s ease-in


</style>

<script>
  import nav from '../nav/nav.vue'
  import footer from '../footer.vue'
  import app__footer from './app__footer.vue'
  export default {
    components: {
      'v-nav': nav,
      'v-footer': footer,
      'app__footer': app__footer
    }
  }
</script>