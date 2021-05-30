<template>
<div class="navigation-list-item">
  <internal-link v-bind:link="link">
    <template v-slot:link>
      <slot name="navigation-list-item">
        <span>No Item</span>
      </slot>
    </template>
  </internal-link>
</div>
</template>

<style lang="scss">
.navigation-list-item {
  
  width: $navigation-item-width;
  height: $navigation-item-height;

  background-color: $main-color-80;
  transition-property: background-color;
  transition-duration: 1s;

  color: $white;
  font-size: 20px;
  line-height: $navigation-item-height;
  text-align: center;

  &:hover {
    background-color: $main-color-20;
  }
  
  a {
    color: $white;
  }

}
</style>

<script>
import InternalLink from "./InternalLink"
export default {
  name: "navigation-list-item",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  components: {
    InternalLink
  }
}
</script>