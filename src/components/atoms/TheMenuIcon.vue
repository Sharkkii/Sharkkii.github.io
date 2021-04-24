<template>
<div id="menu-icon">
  <font-awesome-icon icon="bars"></font-awesome-icon>
  <span>MENU</span>
</div>
</template>

<style lang="scss">
#menu-icon {
  width: $menu-width;
  height: $menu-height;
  line-height: $menu-height;
  text-align: center;
  font-size: 20px;
  color: $white;
  background-color: $main-color;
}
</style>

<script>
export default {
  name: "the-menu-icon"
}
</script>