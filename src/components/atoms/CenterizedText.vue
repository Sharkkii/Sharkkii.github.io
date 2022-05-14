<template>
<expand-div class="centerized-text">
  {{ text }}
</expand-div>
</template>

<style scoped lang="scss">
.centerized-text {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
</style>

<script>
export default {
  name: "centerized-text",
  props: {
    text: {
      type: String
    }
  }
}
</script>