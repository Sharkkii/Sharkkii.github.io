<template>
<div id="research-page">
  <index-template>
    <template v-slot:index-template>
      <p>Hello world! from Research Page</p>
    </template>
  </index-template>
</div>
</template>

<script>
import IndexTemplate from "../../components/templates/IndexTemplate"
export default {
  name: "research-page",
  components: {
    IndexTemplate
  }
}
</script>