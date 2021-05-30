<template>
<div id="the-main-contents">
  <slot name="the-main-contents">
    <span>No Content</span>
  </slot>
</div>
</template>

<style lang="scss">
#the-main-contents {

  position: relative;
  z-index: $layer-02;

  // box-shadow: 0 0 10px 1px $gray-04;
  box-sizing: border-box;
  min-height: $main-min-height;
  padding: $main-contents-padding-vertical $main-contents-padding-horizontal;
  width: $main-width;

  background-color: $white;
  
}
</style>

<script>
export default {
  name: "the-main-contents"
}
</script>