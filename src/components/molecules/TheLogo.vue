<template>
<div id="logo" class="main-color">
  <the-logo-icon/>
</div>
</template>

<style lang="scss" scoped>
#logo {
  // logo
  position: fixed;
  top: 0px;
  left: 0px;
  width: $logo-width;
  height: $logo-height;
  color: $base-color-white;
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