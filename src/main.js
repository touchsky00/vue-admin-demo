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

//路由拦截
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        next()
    }
    else if (JSON.stringify(store.state.userInfo) == "{}") {
        next({
            path: '/login'
        })
    }
    else if (to.matched.some((record) => record)) {
        next()
    }
    else {
        next({
            path: '/login'
        })
    }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
