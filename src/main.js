import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import Languages from 'languages-js'
import VueAxios from 'vue-axios'
import './mock/index.js'
// axios.defaults.baseURL = 'https://api.cupfox.app';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(Antd,Languages)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
