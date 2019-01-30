import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Declare using Router in Vue
Vue.use(Router)

// Init new Router and export
export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/hihi', name: 'HelloWorld', component: HelloWorld },
  ]
})
