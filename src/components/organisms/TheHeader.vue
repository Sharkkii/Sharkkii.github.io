<template>
<div id="the-header">
  <the-header-container>
    <template v-slot:the-header-container>
      <the-navigation/>
      <slot name="the-header"></slot>
    </template>
  </the-header-container>
</div>
</template>

<style lang="scss">
#the-header {
}
</style>

<script>
import TheNavigation from "./TheNavigation"
import TheHeaderContainer from "./TheHeaderContainer"
export default {
  name: "the-header",
  components: {
    TheNavigation, TheHeaderContainer
  }
}
</script>