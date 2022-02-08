<template>
<div id="the-center-column">
  <slot name="center-column"></slot>
</div>
</template>

<style lang="scss">
#the-center-column {
  height: 100%;
}
</style>

<script>
export default {
  name: "the-center-column"
}
</script>