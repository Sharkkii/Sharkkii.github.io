<template>
<div class="anchor">
  <a v-bind:href="link">{{ text }}</a>
</div>
</template>

<style>
</style>

<script>
export default {
  name: "v-anchor",
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