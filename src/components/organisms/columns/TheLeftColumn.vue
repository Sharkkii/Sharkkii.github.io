<template>
<div id="the-left-column">
  <slot name="left-column"></slot>
</div>
</template>

<style lang="scss" scoped>
#the-left-column {
  height: 100%;
  width: 25vw;
}
</style>

<script>
export default {
  name: "the-left-column"
}
</script>