<template>
<div id="not-found-page">
  <index-template>
    <template v-slot:the-main>
      
      <div class="main-item">
        <p>
          Sorry, the requested URL was not found on this website :(
        </p>
        <p>
          You may find what you're looking for on
          <internal-link v-bind:link="'/'" class="display-inline color-main">
            <template v-slot:link>
              HOME PAGE
            </template>
          </internal-link>
          ......
        </p>
      </div>
      
    </template>
  </index-template>
</div>
</template>

<style scoped lang="scss">
#not-found-page {
  .main-item {
    p {
      font-size: $fontsize-large;
      line-height: calc(#{$fontsize-large} * 2.0);
    }
  }
}
</style>

<script>
import InternalLink from '../../../../components/atoms/InternalLink.vue'
import IndexTemplate from "../../../../components/templates/IndexTemplate"
export default {
  name: "not-found-page",
  components: {
    IndexTemplate, InternalLink
  }
}
</script>