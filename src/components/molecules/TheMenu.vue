<template>
<div id="menu">
  <the-menu-icon/>
  <the-menu-pull-down-list />
</div>
</template>

<style scoped>
#menu {
  height: 100px;
  width: 100px;
  background-color: #ffaaff;
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