<template>
<div id="not-found-page">
  <index-template>
    <template v-slot:index-template>
      <p>Hello world! from Not Found Page</p>
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