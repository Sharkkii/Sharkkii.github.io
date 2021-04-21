<template>
<div id="main">
  <the-main-container>
    <div slot="the-main-container">
      <slot name="the-main">No Content</slot>
    </div>
  </the-main-container>
</div>
</template>

<style lang="scss" scoped>
#main {
  // height: 500px;
  width: 100%;
  background-color: $main-color-light;
}
</style>

<script>
import TheMainContainer from "./TheMainContainer"
export default {
  name: "the-main",
  components: {
    TheMainContainer
  }
}
</script>