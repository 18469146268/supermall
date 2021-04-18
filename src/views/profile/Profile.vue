<template>
  <div>
    <!--导航-->
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <login />
    <money />
    <div class="line"></div>
    <profile-list />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Login from "./childComps/Login";
import Money from "./childComps/Money";
import ProfileList from "./childComps/ProfileList";
export default {
  name: "Profile",
  components: {
    NavBar,
    Login,
    Money,
    ProfileList,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  border-bottom: 1px solid #fff;
}
.line {
  width: 100%;
  height: 10px;
  background-color: #eee;
}
</style>