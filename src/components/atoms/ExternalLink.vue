<template>
<div class="external-link">
  <a v-bind:href="link">
    <slot name="link">
      <span>No Item</span>
    </slot>
  </a>
</div>
</template>

<style lang="scss">
.external-link {
  a {
    text-decoration: none;
  }
}
</style>

<script>
export default {
  name: "external-link",
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>