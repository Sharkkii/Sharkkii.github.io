<template>
<div id="the-menu-icon">
  <font-awesome-icon icon="bars"></font-awesome-icon>
  <span>MENU</span>
</div>
</template>

<style lang="scss">
#the-menu-icon {
  
  width: $menu-width;
  height: $menu-height;

  background-color: $main-bg-color;

  color: $main-color;
  font-size: 20px;
  line-height: $menu-height;
  text-align: center;

}
</style>

<script>
export default {
  name: "the-menu-icon"
}
</script>