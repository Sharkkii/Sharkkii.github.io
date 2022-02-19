<template>
<expand-div id="development-icon">
  <div><fa icon="laptop-code"></fa></div>
  <div v-if="hasText">Dev.</div>
</expand-div>
</template>

<style lang="scss">
#development-icon {
  div {
    display: inline-block;
    padding: 0 0.5vw;
  }
}
</style>

<script>
export default {
  name: "development-icon",
  props: {
     hasText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>