<template>
<div id="the-header-container">
  <slot name="the-header-container">No Content</slot>
</div>
</template>

<style lang="scss">
#the-header-container {

  position: relative;
  z-index: $layer-02;

  // box-shadow: 0 0 10px 1px $gray-04;
  box-sizing: border-box;
  height: $header-height;
  padding: $header-padding-vertical $header-padding-horizontal;
  width: $header-width;

  background-color: $white;
  
}
</style>

<script>
export default {
  name: "the-header-container"
}
</script>