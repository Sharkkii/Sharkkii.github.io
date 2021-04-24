<template>
<div id="menu">
  <the-menu-icon/>
  <the-menu-pull-down-list />
</div>
</template>

<style lang="scss">
#menu {
  position: fixed;
  top: 0px;
  right: 0px;
  width: $menu-width;
  // height: $menu-height;
  color: $white;
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