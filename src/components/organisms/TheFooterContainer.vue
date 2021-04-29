<template>
<div id="footer-container">
  <slot name="the-footer-container">No Content</slot>
</div>
</template>

<style lang="scss">
#footer-container {
  position: relative;
  height: 200px;
  // width: 100%;
  padding: $footer-padding-vertical $footer-padding-horizontal;
  color: $white;
  background-color: $main-color;
}
</style>

<script>

export default {
  name: "the-footer-container"
}
</script>