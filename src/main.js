// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueTouch from 'vue-touch'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueTouch, {name: 'v-touch'})

const routes = [{
  path: '/',
  component: App
}]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  mounted() {
  }
}).$mount('#app')
