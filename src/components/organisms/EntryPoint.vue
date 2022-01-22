<template>
<div class="entry-point">
  <internal-link v-bind:link="link">
    <template v-slot:link>
      <div class="entry-point-container">
        <div class="entry-point-content">
          <slot name="content">
          </slot>
        </div>
      </div>
    </template>
  </internal-link>
</div>
</template>

<style lang="scss">
.entry-point {

  .entry-point-container {

    border-color: $main-color-50;
    border-style: solid;
    background-color: $white;

    transition-property: border-color, color, padding, border-width;
    transition-duration: 1s;
    &:hover {
      border-color: $main-color-20;
      color: $main-color-20;
    }

  }

  .entry-point-content {

  }

}
</style>

<script>
import InternalLink from "../atoms/InternalLink.vue"
export default {
  name: "entry-point",
  components: {
    InternalLink
  },
  props: {
    "link": {
      type: String,
      required: true
    }
  }
}
</script>