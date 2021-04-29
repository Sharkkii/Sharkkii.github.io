<template>
<div id="footer">
  <the-footer-container>
    <template v-slot:the-footer-container>
      <!-- <the-copyright-icon/> -->
    </template>
  </the-footer-container>
</div>
</template>

<style lang="scss">
#footer {
}
</style>

<script>
// import TheCopyrightIcon from '../atoms/TheCopyrightIcon'
import TheFooterContainer from "./TheFooterContainer"
export default {
  name: "the-footer",
  components: {
    TheFooterContainer
  }
}
</script>