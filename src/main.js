import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(Mint)
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
