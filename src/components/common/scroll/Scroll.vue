<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建Better-Scroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    if (this.probeType == 2 || this.probeType == 3)
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    //
    console.log(this.scroll);
    // this.scroll.refresh();
    //
    //3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    //this.scroll && 的作用：先判断scroll值是否存在，若存在再进行调用
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //刷新可滚动区域高度
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.Y : 0;
    },
  },
};
</script>

<style scoped>
</style>