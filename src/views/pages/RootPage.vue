<template>
<div id="root-page">
  <index-template>
    <template v-slot:index-template>
      <p>Hello world! from Root Page</p>
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