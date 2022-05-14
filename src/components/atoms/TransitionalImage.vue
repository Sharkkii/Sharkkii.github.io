<template>
<div class="transitional-image">
  <img v-bind:src="link">
</div>
</template>

<style scoped lang="scss">
.transitional-image {

  height: 100%;
  aspect-ratio: 1;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 1s;
  &:hover {
    opacity: 0.5;
  }
  
}
</style>

<script>
export default {
  name: "transitional-image",
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>