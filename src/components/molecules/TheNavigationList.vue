<template>
<div id="the-navigation-list">
  
  <div class="float-left">
    <navigation-list-item v-bind:link="'/'">
      <template v-slot:navigation-list-item>
        <logo/>
      </template>
    </navigation-list-item>
  </div>

  <div v-for="item in items" v-bind:key="item.link" class="float-right">
    <navigation-list-item v-bind:link="item.link">
      <template v-slot:navigation-list-item>
        <div>
          {{ item.text }}
        </div>
      </template>
    </navigation-list-item>
  </div>
</div>
</template>

<style lang="scss">
#the-navigation-list {

  height: $navigation-height;
  width: $navigation-width;

  line-height: $navigation-height;
  text-align: center;

}
</style>

<script>
import InternalLink from "../atoms/InternalLink"
import NavigationListItem from "../atoms/NavigationListItem"
import Logo from "./Logo"
export default {
  name: "the-navigation-list",
  components: {
    InternalLink, NavigationListItem, Logo
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