<template>
<div id="the-menu">
  <the-menu-icon/>
  <the-menu-pull-down-list />
</div>
</template>

<style lang="scss">
#the-menu {
  position: fixed;
  top: 0px;
  right: 0px;
  width: $menu-width;
  // height: $menu-height;
  color: $text-color-03;
  background-color: $bg-color-03;
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