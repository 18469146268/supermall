import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex);

//2.创建Store对象
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // mutations: {
  // addCart(state, payload) {
  //   //1.payload新添加的商品
  //   // let oldProduct = null;
  //   // for (let item of state.cartList) {
  //   //   if (item.iid == payload.iid) {
  //   //     oldProduct = item;
  //   //   }
  //   // }
  //   // let index = state.cartList.indexOf(payload);
  //   //1.查找之前数组中是否该商品
  //   let oldProduct = state.cartList.find(function (item) {
  //     return item.iid === payload.iid
  //   })
  //   //2.判断oldProduct是否有值
  //   if (oldProduct) {
  //     // let oldProduct = state.cartList[index];
  //     oldProduct.count += 1;
  //   } else {
  //     payload.count = 1;
  //     state.cartList.push(payload);
  //   }
  // }
  // },
})

//3.挂载在Vue实例上
export default store
