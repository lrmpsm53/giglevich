<template>
  <div>
      <v-nav></v-nav>
      <router-view></router-view>
      <app__footer>
        <v-footer>
        </v-footer>
      </app__footer>
</div>
</template>
<style lang="scss">
@font-face{
    font-family: Play Bold;
    src: url('../../fonts/Play/Play-Bold.ttf')
}

@font-face{
    font-family: Open Sans Condensed Light;
    src: url('../../fonts/Open_Sans_Condensed/OpenSansCondensed-Light.ttf');
}

body{
    width: 100%;
    box-sizing: border-box;
}
*{
  padding: 0;
  margin:0;
}
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