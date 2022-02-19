<template>
<div class="expand-div">
  <slot></slot>
</div>
</template>

<style scoped>
.expand-div {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  name: "expand-div"
}
</script>