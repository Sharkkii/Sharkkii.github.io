<template>
<div id="main-container">
  <slot name="the-main-container">No Content</slot>
</div>
</template>

<style lang="scss">
#main-container {
  height: 500px;
  // width: 100%;
  padding: $main-padding-vertical $main-padding-horizontal;
  color: $base-color;
  background-color: $base-bg-color;
}
</style>

<script>
export default {
  name: "the-main-container"
}
</script>