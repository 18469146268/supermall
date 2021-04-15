//vueCLI自动创建
// import {createApp} from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

//手动添加
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//阻止启动生产消息
Vue.config.productionTip = false
//实现一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
