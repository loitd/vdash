import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// Declare using Router in Vue. All routing will be here.
Vue.use(Router)

// Init new Router and export
export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    // { path: '/hihi', name: 'HelloWorld', component: HelloWorld },
  ]
})
