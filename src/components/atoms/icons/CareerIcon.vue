<template>
<expand-div id="career-icon">
  <div><fa icon="briefcase"></fa></div>
  <div v-if="hasText">Career</div>
</expand-div>
</template>

<style lang="scss">
#career-icon {
  div {
    display: inline-block;
    padding: 0 0.5vw;
  }
}
</style>

<script>
export default {
  name: "career-icon",
  props: {
     hasText: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>