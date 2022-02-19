<template>
<div class="internal-link">
  <router-link v-bind:to="link">
    <slot name="link">
      <div>No Item</div>
    </slot>
  </router-link>
</div>
</template>

<style lang="scss">
.internal-link {
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>

<script>
export default {
  name: "internal-link",
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>