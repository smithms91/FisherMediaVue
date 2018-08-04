import Vue from 'vue'
import App from './App'
import router from '../router/router'
import VueCarousel from 'vue-carousel';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueCarousel);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
