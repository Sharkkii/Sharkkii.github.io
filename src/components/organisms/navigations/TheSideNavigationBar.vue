<template>
<div id="the-side-navigation-bar">
  <the-side-navigation-list/>
</div>
</template>

<style lang="scss">
#the-side-navigation-bar {

  background-color: $main-color;
  box-sizing: border-box;
  height: 100%;
  position: fixed;
  top: 0px; left: 0px;
  z-index: $layer-03;
  
}
</style>

<script>
import TheSideNavigationList from "../../molecules/navigations/TheSideNavigationList"
export default {
  name: "the-side-navigation-bar",
  components: {
    TheSideNavigationList
  }
}
</script>