<template>
<div id="the-header">
  <the-header-container>
    <template v-slot:the-header-container>
      <the-navigation/>
      <div id="header-content">
        <slot name="the-header"></slot>
      </div>
    </template>
  </the-header-container>
</div>
</template>

<style lang="scss">
#the-header {
  #header-content {
    margin-top: calc(#{$navigation-height} + 5px);
  }
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