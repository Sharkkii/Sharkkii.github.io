<template>
<div id="not-found-page">
  <index-template>
    <template v-slot:the-main>
      <p>Hello world! from Not Found Page</p>
    </template>
  </index-template>
</div>
</template>

<script>
import IndexTemplate from "../../components/templates/IndexTemplate"
export default {
  name: "not-found-page",
  components: {
    IndexTemplate
  }
}
</script>