<template>
<div class="the-left-column">
  <slot name="left-column"></slot>
</div>
</template>

<style lang="scss">
#the-left-column {
  height: 100%;
}
</style>

<script>
export default {
  name: "the-left-column"
}
</script>