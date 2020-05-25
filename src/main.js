import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/public.css'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import { MyDialog } from './components/index'


Vue.use(ElementUI, {size: 'mini'})
Vue.use(MyDialog)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
