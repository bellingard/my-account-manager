import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './store'
import Storage from './services/Storage'
import Repo from './services/Repo'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.storage = Vue.prototype.$storage = new Storage()
Vue.repo = Vue.prototype.$repo = new Repo(Vue.storage)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
