<template>
<div id="three-column-layout-template">
  <the-left-column>
    <template v-slot:left-column>
      <the-side-navigation-bar/>
    </template>
  </the-left-column>
  <the-center-column>
    <template v-slot:center-column>
      <slot name="center-column"></slot>
    </template>
  </the-center-column>
  <the-right-column>
    <template v-slot:right-column>
      <the-side-bar/>
    </template>
  </the-right-column>
</div>
</template>

<style lang="scss">
#three-column-layout-template {

  #the-left-column {

    position: fixed;
    top: 0; left: 0;

  }

  #the-center-column {
    
  }

  #the-right-column {

    position: fixed;
    top: 0; right: 0;

  }

}
</style>

<script>
import TheLeftColumn from "../organisms/columns/TheLeftColumn.vue"
import TheCenterColumn from "../organisms/columns/TheCenterColumn.vue"
import TheRightColumn from "../organisms/columns/TheRightColumn.vue"
import TheSideNavigationBar from '../organisms/navigations/TheSideNavigationBar.vue'
import TheSideBar from "../organisms/TheSideBar.vue"
export default {
  name: "three-column-template",
  components: {
    TheLeftColumn, TheCenterColumn, TheRightColumn, TheSideNavigationBar, TheSideBar
  }
}
</script>