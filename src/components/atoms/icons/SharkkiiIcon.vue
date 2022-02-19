<template>
<expand-div id="sharkkii-icon">
  <div><fa icon="ship"></fa></div>
  <div v-if="hasText">Sharkkii</div>
</expand-div>
</template>

<style lang="scss">
#sharkkii-icon {
  div {
    display: inline-block;
    padding: 0 0.5vw;
  }
}
</style>

<script>
export default {
  name: "sharkkii-icon",
  props: {
     hasText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>