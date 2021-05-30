<template>
<div id="the-footer-container">
  <slot name="the-footer-container">
    <span>No Content</span>
  </slot>
</div>
</template>

<style lang="scss">
#the-footer-container {

  position: relative;
  z-index: $layer-02;

  box-shadow: 0 0 10px 1px $gray-04;
  box-sizing: border-box;
  height: $footer-height;
  padding: $footer-padding-vertical $footer-padding-horizontal;
  width: $footer-width;

  background-color: $main-color;

}
</style>

<script>

export default {
  name: "the-footer-container"
}
</script>