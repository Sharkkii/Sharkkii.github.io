<template>
<div id="header-container">
  <slot name="the-header-container">No Content</slot>
</div>
</template>

<style lang="scss">
#header-container {
  height: 200px;
  // width: 100%;
  padding: $header-padding-vertical $header-padding-horizontal;
  color: $white;
  background-color: $main-color;
}
</style>

<script>
export default {
  name: "the-header-container"
}
</script>