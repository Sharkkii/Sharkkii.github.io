<template>
<div id="main-container">
  <slot name="the-main-container">No Content</slot>
</div>
</template>

<style lang="scss" scoped>
#main-container {
  height: 500px;
  width: 80%;
  margin: 0 0 $logo-width $menu-width;
  background-color: $main-color-light;
}
</style>

<script>
export default {
  name: "the-main-container"
}
</script>