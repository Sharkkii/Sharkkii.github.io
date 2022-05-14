<template>
<div class="image-caption-entry-point">
  <entry-point v-bind:link="link" v-bind:width="width" v-bind:height="height" v-bind:borderWidth="borderWidth" v-bind:borderWidthHover="borderWidthHover">
    <template v-slot:content>
      <image-caption>
        <template v-slot:image>
          <slot name="image"></slot>
        </template>
        <template v-slot:caption>
          <slot name="caption"></slot>
        </template>
      </image-caption>
    </template>
  </entry-point>
</div>
</template>

<style lang="scss" scoped>
.image-caption-entry-point {

  .container {

    border-color: $main-color-50;
    border-style: solid;
    background-color: $white;

    transition-property: border-color, padding, border-width;
    transition-duration: 1s;
    &:hover {
      border-color: $main-color-20;
    }

    .flex-container {
      display: flex;
      justify-content: space-evenly;
    }

    .flex-item.image {
      height: 100%;
      aspect-ratio: 1/1;
      opacity: 1;
      transition-property: opacity;
      transition-duration: 1s;
      &:hover {
        opacity: 0.5;
      }
    }

    .flex-item.caption {
      background-color: #aaaaaa;
      height: 100%;
      aspect-ratio: 2/1;
      transition-property: color;
      transition-duration: 1s;
      &:hover {
        color: $main-color-20;
      }
    }

  }

}
</style>

<script>
import InternalLink from "../atoms/InternalLink.vue"
import ImageCaption from "@/components/molecules/ImageCaption.vue"
import EntryPoint from "./EntryPoint.vue"
export default {
  name: "image-caption-entry-point",
  components: {
    InternalLink, ImageCaption, EntryPoint
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