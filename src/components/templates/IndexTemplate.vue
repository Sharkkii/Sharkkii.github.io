<template>
<div id="index-template">
  <the-header/>
  <the-main>
    <template v-slot:the-main>
      <slot name="index-template">No Content</slot>
    </template>
  </the-main>
  <the-footer/>
</div>
</template>

<script>
import TheHeader from "../organisms/TheHeader"
import TheMain from "../organisms/TheMain"
import TheFooter from "../organisms/TheFooter"
import TheLogo from "../molecules/TheLogo"
export default {
  name: "index-template",
  components: {
    TheHeader, TheMain, TheFooter, TheLogo
  }
}
</script>