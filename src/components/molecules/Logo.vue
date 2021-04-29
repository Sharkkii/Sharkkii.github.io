<template>
<div id="logo">
  <logo-icon/>
</div>
</template>

<style lang="scss">
#logo {
}
</style>

<script>
import LogoIcon from "../atoms/LogoIcon"
import InternalLink from "../atoms/InternalLink"
export default {
  name: "logo",
  components: {
    LogoIcon, InternalLink
  }
}
</script>