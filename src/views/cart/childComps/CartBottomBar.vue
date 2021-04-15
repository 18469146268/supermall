<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">去计算：({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            //由于后台传过来的数据item.price形式是：￥37.00 ，因此做计算时需要把人民币符号截取
            return preValue + (item.price).slice(1) * item.count;
          }, 0).toFixed(2)
      );
    },
    checkLength(){
      return this.cartList.filter(item =>item.checked).length
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate{
  color: #fff;
  font-weight: 300;
  width:90px;
  text-align: center;
  background-color: #FF5A00;
}
</style>