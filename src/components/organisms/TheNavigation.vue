<template>
<div id="the-navigation">
  <the-navigation-list/>
</div>
</template>

<style lang="scss">
#the-navigation {

  position: fixed;
  right: 0px;
  top: 0px;
  z-index: $layer-03;

  box-shadow: 0 0 20px $gray-07;
  box-sizing: border-box;
  height: $navigation-height;
  width: $navigation-width;

  background-color: $main-color;

}
</style>

<script>
import TheNavigationList from "../molecules/TheNavigationList"
export default {
  name: "the-navigation",
  components: {
    TheNavigationList
  }
}
</script>
    NavigationListItem