<template>
<div id="header">
  <the-logo/>
  <the-menu/>
</div>
</template>

<style lang="scss" scoped>
#header {
  height: 200px;
  width: 100%;
  background-color: $main-color;
}
</style>

<script>
import TheLogo from "../molecules/TheLogo"
import TheMenu from "../molecules/TheMenu"
export default {
  name: "the-header",
  components: {
    TheLogo, TheMenu
  }
}
</script>