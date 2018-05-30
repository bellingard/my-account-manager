import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'
import store from './store'
import Config from './services/Config'
import Storage from './services/Storage'
import Repo from './services/Repo'
import PayeeFinder from './services/PayeeFinder'
import Formatter from './services/utils/Formatter'
import CsvLoader from './services/utils/CsvLoader'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.appConfig = Vue.prototype.$appConfig = new Config()
Vue.storage = Vue.prototype.$storage = new Storage(Vue.appConfig)
Vue.payeeFinder = Vue.prototype.$payeeFinder = new PayeeFinder(Vue.storage)
Vue.repo = Vue.prototype.$repo = new Repo(Vue.storage, Vue.payeeFinder)
Vue.formatter = Vue.prototype.$format = new Formatter(Vue.repo)
Vue.cvsLoader = Vue.prototype.$cvsLoader = new CsvLoader(Vue.repo)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

alert('boom')
