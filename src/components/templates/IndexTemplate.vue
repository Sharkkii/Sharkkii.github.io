<template>
<div id="index-template">
  <the-header>
    <template v-slot:the-header>
      <slot name="the-header"></slot>
    </template>
  </the-header>
  <the-main>
    <template v-slot:the-main>
      <slot name="the-main">No Content</slot>
    </template>
  </the-main>
  <the-footer/>
</div>
</template>

<style lang="scss">
#index-template {
}
</style>

<script>
import TheHeader from "../organisms/TheHeader"
import TheMain from "../organisms/TheMain"
import TheFooter from "../organisms/TheFooter"
export default {
  name: "index-template",
  components: {
    TheHeader, TheMain, TheFooter
  }
}
</script>