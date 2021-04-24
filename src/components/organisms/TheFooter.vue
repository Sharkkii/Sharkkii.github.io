<template>
<div id="footer">
  <the-footer-container>
    <template v-slot:the-footer-container>
      <slot name="the-footer">No Content</slot>
    </template>
  </the-footer-container>
</div>
</template>

<style lang="scss">
#footer {
}
</style>

<script>
import TheFooterContainer from "./TheFooterContainer"
export default {
  name: "the-footer",
  components: {
    TheFooterContainer
  }
}
</script>