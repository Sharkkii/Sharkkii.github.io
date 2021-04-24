<template>
<div id="logo">
  <router-link to="/">
    <the-logo-icon/>
  </router-link>
</div>
</template>

<style lang="scss">
#logo {
  position: fixed;
  top: 0px;
  left: 0px;
  width: $logo-width;
  height: $logo-height;
  color: $white;
  background-color: $main-color;
}
</style>

<script>
import TheLogoIcon from "../atoms/TheLogoIcon"
export default {
  name: "the-logo",
  components: {
    TheLogoIcon
  }
}
</script>