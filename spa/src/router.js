import Vue from 'vue'
import Router from 'vue-router'
import app__header from './components/app/__header.vue'
import app__about_icon from './components/app/app__about-icon.vue'
import app__map from './components/app/app__map.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: app__header},
    {path: '/home', component: app__header},
    {path: '/about-icon', component: app__about_icon},
    {path:'/map', component: app__map}
  ]
})