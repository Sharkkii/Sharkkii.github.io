<template>
<div class="justified-text">
  <div class="flex-container">
    <div class="flex-item" v-for="letter in text" v-bind:key="letter.id">
      {{ letter }}
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.justified-text {

  .flex-container {
    display: flex;
    justify-content: space-between;
  }

  .flex-item {
  }

}
</style>

<script>
export default {
  name: "justified-text",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>