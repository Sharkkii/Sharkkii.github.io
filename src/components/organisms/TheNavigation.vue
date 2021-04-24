<template>
<div id="navigation">
  <the-navigation-list/>
  <!-- <the-logo/> -->
  <!-- <the-menu/> -->
</div>
</template>

<style lang="scss">
#navigation {
  position: fixed;
  top: 0px;
  right: 0px;
  width: $menu-width;
  height: 50px;
  width: 100%;
  background-color: $main-color;
}
</style>

<script>
import TheNavigationList from "../molecules/TheNavigationList"
// import TheLogo from "../molecules/TheLogo"
// import TheMenu from "../molecules/TheMenu"
export default {
  name: "the-navigation",
  components: {
    // TheLogo, TheMenu,
    TheNavigationList
  }
}
</script>
    NavigationListItem