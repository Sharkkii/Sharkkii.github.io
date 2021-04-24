<template>
<div id="header">
  <the-header-container>
    <template v-slot:the-header-container>
      <the-navigation/>
    </template>
  </the-header-container>
</div>
</template>

<style lang="scss">
#header {
  
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