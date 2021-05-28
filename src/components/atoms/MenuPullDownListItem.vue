<template>
<div class="menu-pull-down-list-item">
  <internal-link>
    <slot name="menu-pull-down-list-item">
      <slot name="link">
        <span>No Item</span>
      </slot>
    </slot>
  </internal-link>
</div>
</template>

<style lang="scss">
.menu-pull-down-list-item {
  
  height: $menu-height;
  width: $menu-width;

  background-color: $bg-color-03;
  
  color: $text-color-03;
  
}
</style>

<script>
import InternalLink from "./InternalLink"
export default {
  name: "menu-pull-down-list-item",
  components: {
    InternalLink
  }
}
</script>
