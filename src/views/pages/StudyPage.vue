<template>
<div id="study-page">
  <index-template>
    <template v-slot:index-template>
      <p>Hello world! from Study Page</p>
    </template>
  </index-template>
</div>
</template>

<script>
import IndexTemplate from "../../components/templates/IndexTemplate"
export default {
  name: "study-page",
  components: {
    IndexTemplate
  }
}
</script>