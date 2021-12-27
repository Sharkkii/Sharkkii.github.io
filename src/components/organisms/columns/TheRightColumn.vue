<template>
<div class="the-right-column">
  <slot name="right-column"></slot>
</div>
</template>

<style lang="scss">
#the-right-column {
  height: 100%;
}
</style>

<script>
export default {
  name: "the-right-column"
}
</script>