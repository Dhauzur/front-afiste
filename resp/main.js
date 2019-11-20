
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import routes from './routes'
import App from './App.vue'
import feather from 'vue-icon'
// import HighchartsVue from "highcharts-vue";

// app.js
import './sass/custom.scss'


Vue.use(feather, 'v-icon')

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueCookies)
// Vue.use(HighchartsVue,{tagName: 'chart'})

VueCookies.config('1h')
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
