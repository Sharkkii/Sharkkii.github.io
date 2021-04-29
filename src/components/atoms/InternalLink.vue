<template>
<div class="internal-link">
  <router-link v-bind:to="link">
    <slot name="link">
      <span>No Item</span>
    </slot>
  </router-link>
</div>
</template>

<style lang="scss">
.internal-link {
  a {
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