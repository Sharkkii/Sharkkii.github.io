<template>
<div id="menu" class="main-color">
  <the-menu-icon/>
  <the-menu-pull-down-list />
</div>
</template>

<style lang="scss" scoped>
#menu {
  // menu
  position: fixed;
  top: 0px;
  right: 0px;
  width: $menu-width;
  // height: $menu-height;
  color: $base-color-white;
  background-color: $main-color;
}
</style>

<script>
import TheMenuIcon from "../atoms/TheMenuIcon"
import TheMenuPullDownList from "./TheMenuPullDownList"
export default {
  name: "the-menu",
  components: {
    TheMenuIcon, TheMenuPullDownList
  }
}
</script>