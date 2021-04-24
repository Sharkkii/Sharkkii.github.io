<template>
<div class="menu-pull-down-list-item">
  <slot name="menu-pull-down-list-item">No Item</slot>
</div>
</template>

<style lang="scss">
.menu-pull-down-list-item {
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: $white;
  }
}
</style>

<script>
export default {
  name: "menu-pull-down-list-item"
}
</script>