<template>
<div id="the-side-navigation-list">
  
  <div>
    <side-navigation-list-item v-bind:link="'/'">
      <template v-slot:side-navigation-list-item>
        <logo/>
      </template>
    </side-navigation-list-item>
  </div>

  <div v-for="item in items" v-bind:key="item.link">
    <side-navigation-list-item v-bind:link="item.link">
      <template v-slot:side-navigation-list-item>
        <div class="item">
          {{ item.text }}
        </div>
      </template>
    </side-navigation-list-item>
  </div>
</div>
</template>

<style lang="scss">
#the-side-navigation-list {
  @include LogoSize($width:400px, $height:100px, $font-size:40px);
  .item {
    font-size: 20px;
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
        // { link: "/", text: "TOP" },
        { link: "/about-me", text: "About Me" },
        { link: "/development", text: "Development" },
        { link: "/research", text: "Research" },
        { link: "/study", text: "Study" },
      ]
    }
  }
}
</script>