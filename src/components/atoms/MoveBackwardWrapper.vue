<template>
<div class="move-backward-wrapper" v-on:click="moveBackward()">
  <a href="#">
    <slot name="move-backward-wrapper">
      <span>Move Backward</span>
    </slot>
  </a>
</div>
</template>

<style lang="scss">
.move-backward-wrapper {
  a {
    text-decoration: none;
  }
}
</style>

<script>
export default {
  name: "move-backward",
  methods: {
    moveBackward: function() {
      history.back()
    }
  }
}
</script>