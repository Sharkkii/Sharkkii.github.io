<template>
<div id="logo">
  <the-logo-icon/>
</div>
</template>

<style scoped>
#logo {
  height: 100px;
  width: 100px;
  background-color: #ffffaa;
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