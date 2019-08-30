import Vue from 'vue'
import app from './components/app/app.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import headline from './components/headline.vue'
Vue.component('headline', headline)

import paragraph from './components/paragraph.vue'
Vue.component ('paragraph', paragraph)





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
