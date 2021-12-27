<template>
<div id="three-column-layout-template">
  <the-left-column>
    <template v-slot:left-column>
      <the-side-navigation-bar/>
    </template>
  </the-left-column>
  <the-center-column>
    <template v-slot:center-column></template>
  </the-center-column>
  <the-right-column>
    <template v-slot:right-column></template>
  </the-right-column>
</div>
</template>

<style lang="scss">
#three-column-layout-template {
}
</style>

<script>
import TheLeftColumn from "../organisms/columns/TheLeftColumn.vue"
import TheCenterColumn from "../organisms/columns/TheCenterColumn.vue"
import TheRightColumn from "../organisms/columns/TheRightColumn.vue"
import TheSideNavigationBar from '../organisms/TheSideNavigationBar.vue'
export default {
  name: "three-column-template",
  components: {
    TheLeftColumn, TheCenterColumn, TheRightColumn, TheSideNavigationBar
  }
}
</script>