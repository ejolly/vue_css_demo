/* Within the flexgrid route below we're lazily loading components so that they only need to be loaded when the route is actually visited not when the home page is loaded. Probably doesn't make a huge diff for a simple app like this, but could if one of the routes containes a lot of data or needs something from the server.

Contrast this to how the flexbox is loaded more simply.
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FlexyBox from './components/Flexy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: FlexyBox
    },
    {
      path: '/grid',
      name: 'grid',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./components/Gridy.vue')
    }
  ]
})
