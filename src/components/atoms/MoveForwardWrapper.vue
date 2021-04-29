<template>
<div class="move-forward-wrapper" v-on:click="moveForward()">
  <a href="#">
    <slot name="move-forward-wrapper">
      <span>Move Forward</span>
    </slot>
  </a>
</div>
</template>

<style lang="scss">
.move-forward {
  a {
    text-decoration: none;
  }
}
</style>

<script>
export default {
  name: "move-forward",
  methods: {
    moveForward: function() {
      history.forward()
    }
  }
}
</script>