<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<!--
本案例来源于B站——ilovecoding
部分代码来源于gitHub
案例仅是学习使用，存在诸多未解决Bug
代码仅供参考，若有侵权请联系删除 hnpxyj@126.com
2021/04/8 Yj
--->
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style> 