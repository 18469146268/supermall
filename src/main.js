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

import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

//阻止启动生产消息
Vue.config.productionTip = false
//实现一个事件总线
Vue.prototype.$bus = new Vue()
//安装Toast插件
Vue.use(toast)
//解决移动端的300ms延迟
FastClick.attach(document.body)
//使用懒加载插件,在使用懒加载的地方加上：v-lazy
Vue.use(VueLazyLoad, {
  // loading: require('assets/img/common/placeholder.png')
  loading:import('./assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
