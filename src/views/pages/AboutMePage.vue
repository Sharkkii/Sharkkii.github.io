<template>
<div id="about-me-page">
  <index-template>
    <template v-slot:index-template>
      <p>Hello world! from About Me Page</p>
    </template>
  </index-template>
</div>
</template>

<script>
import IndexTemplate from "../../components/templates/IndexTemplate"
export default {
  name: "root-page",
  components: {
    IndexTemplate
  }
}
</script>