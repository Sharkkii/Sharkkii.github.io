<template>
<div id="the-navigation-list">
  <div class="flex-container">
  
    <navigation-list-item class="margin-right-auto flex-item" v-bind:link="'/'">
      <template v-slot:navigation-list-item>
        <logo/>
      </template>
    </navigation-list-item>

    <navigation-list-item class="flex-item" v-for="item in items" v-bind:key="item.link" v-bind:link="item.link">
      <template v-slot:navigation-list-item>
        <div>
          <p>{{ item.text }}</p>
        </div>
      </template>
    </navigation-list-item>
  
  </div>
</div>
</template>

<style lang="scss" scoped>
#the-navigation-list {

  height: $navigation-height;
  width: $navigation-width;

  .flex-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .flex-item {
    height: 100%;
    width: $navigation-item-width;
  }

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
        { link: "/research", text: "Research" },
        { link: "/development", text: "Development" },
        { link: "/career", text: "Career" },
        { link: "/about-me", text: "About Me" },
      ]
    }
  }
}
</script>