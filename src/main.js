//vueCLI创建的
// import {createApp} from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')

//自己添加的
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//实现一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
