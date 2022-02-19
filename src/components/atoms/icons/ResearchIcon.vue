<template>
<expand-div id="research-icon">
  <div><fa icon="graduation-cap"></fa></div>
  <div v-if="hasText">Res.</div>
</expand-div>
</template>

<style lang="scss">
#research-icon {
  div {
    display: inline-block;
    padding: 0 0.5vw;
  }
}
</style>

<script>
export default {
  name: "research-icon",
  props: {
     hasText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>