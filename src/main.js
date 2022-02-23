import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import toast from 'components/toast'

import fastClick from 'fastclick'


Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.prototype.$bus=new Vue()

Vue.use(ElementUI)
Vue.use(toast)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
