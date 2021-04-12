import {
  debounce
} from './utils'

import BackTop from "components/content/backTop/BackTop";


export const itemListenerMixin = {
  data() {
    return {
      //监听图片
      ItemImgListener: null,
    }
  },
  mounted() {
    //1.监听item中图片加载完成情况
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    //2.对监听的事件进行保存
    this.ItemImgListener = () => {
      // this.$refs.scroll.refresh();
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.ItemImgListener);
  },
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // listenShowBackTop(position){
    //   this.isShowBackTop = -position.y > 1000;
    // }
  },
}
