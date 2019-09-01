import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    render_card: false,
    render_image: false
  },
  mutations: {
    card(state){
      state.render_card = !state.render_card
    },
    image(state){
      state.render_image = !state.render_image
    }
  },
  actions: {

  }
})
