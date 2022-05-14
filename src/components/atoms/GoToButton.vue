<template>
<div class="go-to-button">
  <router-link v-bind:to="link">
    <slot name="button">GO TO</slot>
  </router-link>
</div>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: "go-to-button",
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>