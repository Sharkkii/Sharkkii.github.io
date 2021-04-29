<template>
<div id="the-main">
  <the-main-container>
    <template v-slot:the-main-container>
      <slot name="the-main">No Content</slot>
    </template>
  </the-main-container>
</div>
</template>

<style lang="scss">
#the-main {
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