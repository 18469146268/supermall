<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButtom",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
};
</script>

<style>
.check-button {
  /* background-color: red; */
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check{
  border-color:#FF5A00;
  background-color: #FF5A00;
}
</style>