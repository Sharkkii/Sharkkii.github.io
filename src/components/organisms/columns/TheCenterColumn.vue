<template>
<div id="the-center-column">
  <slot name="center-column"></slot>
</div>
</template>

<style lang="scss">
#the-center-column {
  height: 100%;
  margin-left: 400px;
  margin-right: 10px;
}
</style>

<script>
export default {
  name: "the-center-column"
}
</script>