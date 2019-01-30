// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

// Font Awesome-related initialization
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the specific imported icons
library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)

// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
