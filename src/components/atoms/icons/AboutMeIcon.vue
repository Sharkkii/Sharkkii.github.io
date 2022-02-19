<template>
<expand-div id="about-me-icon">
  <div><fa icon="id-card"></fa></div>
  <div v-if="hasText">Me</div>
</expand-div>
</template>

<style scoped lang="scss">
#about-me-icon {
  div {
    display: inline-block;
    padding: 0 0.5vw;
  }
}
</style>

<script>
export default {
  name: "about-me-icon",
  props: {
     hasText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>