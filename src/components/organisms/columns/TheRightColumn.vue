<template>
<div id="the-right-column">
  <slot name="right-column"></slot>
</div>
</template>

<style lang="scss" scoped>
#the-right-column {
  height: 100%;
  width: 5vw;
}
</style>

<script>
export default {
  name: "the-right-column"
}
</script>