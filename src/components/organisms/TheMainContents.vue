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

  min-height: $main-min-height;
  width: $main-width;

  background-color: $white;
  
}
</style>

<script>
export default {
  name: "the-main-contents"
}
</script>