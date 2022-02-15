<template>
<div id="three-column-layout-template">
  <transition>
    <div class="page" v-if="flag">
      <div class="flex-container">
        <the-left-column class="flex-item">
          <template v-slot:left-column>
            <the-side-navigation-bar/>
          </template>
        </the-left-column>
        <the-center-column class="flex-item">
          <template v-slot:center-column>
            <slot name="center-column"></slot>
          </template>
        </the-center-column>
        <the-right-column class="flex-item">
          <template v-slot:right-column>
            <the-side-bar/>
          </template>
        </the-right-column>
      </div>
    </div>
  </transition>
</div>
</template>

<style lang="scss" scoped>
#three-column-layout-template {

  height: $page-height;

  .page {

    .flex-container {
      display: flex;
      justify-content: space-between;
    }

    .flex-item {
    }

    #the-left-column {

      #the-side-navigation-bar {
        position: fixed;
        top: 0; left: 0;
      }

    }

    #the-center-column {
    }

    #the-right-column {
    }
  
  }

  .v-enter-active, .v-leave-active {
    transition: opacity $delay;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave {
    opacity: 1
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
  },
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  }
}
</script>