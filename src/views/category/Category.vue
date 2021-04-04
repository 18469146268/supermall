<template>
  <div class="wrapper">
    <ul class="content">
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
      <li>列表标签01</li>
      <li>列表标签02</li>
      <li>列表标签03</li>
      <li>列表标签04</li>
      <li>列表标签05</li>
      <li>列表标签06</li>
      <li>列表标签07</li>
      <li>列表标签08</li>
      <li>列表标签09</li>
      <li>列表标签10</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Categry",
  data() {
    return {
      scroll: null,
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad:true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp",()=>{
      console.log("上拉加载更多！！！")
    })
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: tomato;
  /* overflow: hidden; */
  /* overflow-y: scroll; */
}
</style>