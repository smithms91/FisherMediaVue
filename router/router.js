import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Portfolio from '../src/pages/Portfolio'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
