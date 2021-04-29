<template>
<div id="the-header-container">
  <slot name="the-header-container">No Content</slot>
</div>
</template>

<style lang="scss">
#the-header-container {

  position: relative;
  z-index: $layer-02;

  box-shadow: 0 0 10px 1px $gray-04;
  box-sizing: border-box;
  height: 200px;
  padding: $header-padding-vertical $header-padding-horizontal;
  width: 100%;

  background-color: $bg-color-03;
  
}
</style>

<script>
export default {
  name: "the-header-container"
}
</script>