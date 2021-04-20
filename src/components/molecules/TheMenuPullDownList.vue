<template>
<div id="menu-pull-down-list">
  <p slot="menu-pull-down-list-item">
    <v-anchor v-bind:link="'https://www.google.com'" v-bind:text="'Google'" />
  </p>
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
import VAnchor from "../atoms/VAnchor"
import MenuPullDownListItem from "../atoms/MenuPullDownListItem"
export default {
  name: "the-menu-pull-down-list",
  components: {
    VAnchor, MenuPullDownListItem
  }
}
</script>