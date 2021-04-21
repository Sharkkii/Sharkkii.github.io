<template>
<div id="link">
  <router-link v-bind:to="link">{{ text }}</router-link>
</div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "v-router-link",
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>