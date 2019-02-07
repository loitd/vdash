// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Require the main Sass manifest file. If not available then create
require('./assets/sass/main.scss');

// Font Awesome-related initialization. Importing
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser, faSearch, faHome, faHandsHelping, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faDiscourse } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faSearch)
library.add(faHome)
library.add(faHandsHelping)
library.add(faBell)
library.add(faSignOutAlt)
library.add(faFacebook)
library.add(faTwitter)
library.add(faDiscourse)

// Enable the FontAwesomeIcon COMPONENT globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
// End configure font-awesome-icons GLOBALLY

Vue.config.productionTip = false

/* eslint-disable no-new */
/* Declare GLOBAL new VUE */
new Vue({
  el: '#app',             //----->main element in #app
  router,                 //----->inject imported router as a GLOBAL
  components: { App },    //----->main/root component as imported App
  template: '<App/>'      //----->dont know why using template
})
