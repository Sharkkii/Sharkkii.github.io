<template>
<div id="the-main-container">
  <the-main-contents>
    <template v-slot:the-main-contents>
      <slot name="the-main-container">No Content</slot>
    </template>
  </the-main-contents>
</div>
</template>

<style lang="scss">
#the-main-container {

  position: relative;
  z-index: 1;

  box-sizing: border-box;
  min-height: $main-min-height;
  padding: $main-padding-vertical $main-padding-horizontal;
  width: $main-width;

  background-color: $white;
  
}
</style>

<script>
import TheMainContents from "./TheMainContents"
export default {
  name: "the-main-container",
  components: {
    TheMainContents
  }
}
</script>