<template>
<div id="logo">
  <font-awesome-icon icon="ship"></font-awesome-icon>
  <span>SHARKKII</span>
</div>
</template>

<style lang="scss">
#logo {
  // @include LogoSize(width, height, font-size);
}
</style>

<script>
import InternalLink from "../atoms/InternalLink"
export default {
  name: "logo",
  components: {
    InternalLink
  }
}
</script>