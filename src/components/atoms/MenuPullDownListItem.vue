<template>
<div id="menu-pull-down-list-item">
  <slot name="menu-pull-down-list-item">No Item</slot>
</div>
</template>

<style scoped>
#menu-pull-down-list-item {
  font-size: 10px;
}
</style>

<script>
export default {
  name: "menu-pull-down-list-item"
}
</script>