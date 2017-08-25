import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
