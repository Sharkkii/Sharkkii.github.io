<template>
<div id="under-construction-page">
  <index-template>
    <template v-slot:index-template>
      <div class="headline">
        <font-awesome-icon icon="tools"></font-awesome-icon>
        <span>This page is under construction.</span>
      </div>
      <move-backward-wrapper>
        <template v-slot:move-backward-wrapper>
          <span>Return back to the previous page</span>
        </template>
      </move-backward-wrapper>
      <internal-link v-bind:link="'/'">
        <template v-slot:link>
          <span>Go to the top page</span>
        </template>
      </internal-link>
    </template>
  </index-template>
</div>
</template>

<style lang="scss">
.headline {
  color: $main-color;
  font-size: 40px;
  font-weight: bold;
}
</style>

<script>
import InternalLink from "../../components/atoms/InternalLink"
import MoveBackwardWrapper from "../../components/atoms/MoveBackwardWrapper"
import IndexTemplate from "../../components/templates/IndexTemplate"
export default {
  name: "under-construction-page",
  components: {
    MoveBackwardWrapper, InternalLink, IndexTemplate
  }
}
</script>
