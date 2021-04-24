<template>
<div class="navigation-list-item">
  <slot name="navigation-list-item">No Item</slot>
</div>
</template>

<style lang="scss">
.navigation-list-item {
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: $white;
  }
}
</style>

<script>
export default {
  name: "navigation-list-item"
}
</script>