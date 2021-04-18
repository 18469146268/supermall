import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //1.查找之前数组中是否该商品
      let oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid
      })
      //2.判断oldProduct是否有值
      if (oldProduct) {
        // let oldProduct = state.cartList[index];
        // oldProduct.count += 1;
        //数量+1
        context.commit(ADD_COUNTER, oldProduct)
        resolve("当前商品数量+1")
      } else {
        //添加新的商品
        payload.count = 1;
        // context.cartList.push(payload);
        context.commit(ADD_TO_CART, payload);
        resolve("添加了新的商品")
      }
    })
  }
}
