<template>
<div class="router-link">
  <router-link v-bind:to="link">{{ text }}</router-link>
</div>
</template>

<style>
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