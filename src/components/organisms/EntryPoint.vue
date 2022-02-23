<template>
<div class="entry-point">
  <internal-link v-bind:link="link">
    <template v-slot:link>
      <div class="entry-point-container">
        <div class="entry-point-item">
          <slot name="content"></slot>
        </div>
      </div>
    </template>
  </internal-link>
</div>
</template>

<style lang="scss" scoped>
.entry-point {

  height: v-bind(height);
  width: v-bind(width);
  padding: 0;

  .entry-point-container {

    box-sizing: border-box;
    border-color: $main-color-50;
    border-style: solid;
    border-width: v-bind(borderWidth);
    background-color: $white;

    transition-property: border-color, border-width, color, padding;
    transition-duration: 1s;
    &:hover {
      border-color: $main-color-20;
      border-width: v-bind(borderWidthHover);
      color: $main-color-20;
      padding: calc(v-bind(borderWidth) - v-bind(borderWidthHover));
    }

  }

  .entry-point-item {
    box-sizing: border-box;
    height: calc(v-bind(height) - 2 * v-bind(border-width));
    padding: 10px;
    width: calc(v-bind(width) - 2 * v-bind(border-width));
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
    link: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    borderWidth: {
      type: String,
      required: true
    },
    borderWidthHover: {
      type: String,
      required: true
    }
  }
}
</script>