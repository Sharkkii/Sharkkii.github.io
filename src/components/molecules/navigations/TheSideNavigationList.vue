<template>
<div id="the-side-navigation-list">
  
  <div class="flex-container">

    <side-navigation-list-item class="flex-item" v-bind:link="'/'">
      <template v-slot:side-navigation-list-item>
        <logo/>
      </template>
    </side-navigation-list-item>

    <side-navigation-list-item class="flex-item" v-for="item in items" v-bind:key="item.link" v-bind:link="item.link">
      <template v-slot:side-navigation-list-item>
        <div class="item">
          {{ item.text }}
        </div>
      </template>
    </side-navigation-list-item>

  </div>
</div>
</template>

<style lang="scss" scoped>
#the-side-navigation-list {
  $logo-height: $side-navigation-item-height;
  $logo-width: $side-navigation-item-width;
  @include LogoSize($width:$logo-width, $height:$logo-height, $font-size:$fontsize-xlarge);
  
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .flex-item {
    height: $side-navigation-item-height;
    width: $side-navigation-item-width;
  }

  .item {
    font-size: $fontsize-large;
    height: $side-navigation-item-height;
    line-height: $side-navigation-item-height;
    width: $side-navigation-item-width;
  }
}
</style>

<script>
import InternalLink from "../../atoms/InternalLink"
import SideNavigationListItem from "../../atoms/navigations/SideNavigationListItem"
import Logo from "../Logo"
export default {
  name: "the-side-navigation-list",
  components: {
    InternalLink, SideNavigationListItem, Logo
  },
  data: function() {
    return {
      "items": [
        { link: "/research", text: "Research" },
        { link: "/development", text: "Development" },
        { link: "/career", text: "Career" },
        { link: "/about-me", text: "About Me" },
      ]
    }
  }
}
</script>