<template>
<div class="side-navigation-list-item">
  <internal-link v-bind:link="link">
    <template v-slot:link>
      <slot name="side-navigation-list-item">
        <span>No Item</span>
      </slot>
    </template>
  </internal-link>
</div>
</template>

<style lang="scss" scoped>
.side-navigation-list-item {

  width: $side-navigation-item-width;
  height: $side-navigation-item-height;
  font-size: $fontsize-large;
  line-height: $side-navigation-item-height;
  
  background-color: $main-color-80;
  color: $white;
  text-align: center;
  transition-property: background-color;
  transition-duration: 1s;

  &:hover {
    background-color: $main-color-20;
  }
  
  a {
    color: $white;
  }

}
</style>

<script>
import InternalLink from "../InternalLink"
export default {
  name: "side-navigation-list-item",
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