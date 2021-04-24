<template>
<div id="navigation-list">
  <div class="navigation-list-item">
    <navigation-list-item>
      <template v-slot:navigation-list-item>
        <the-logo/>
      </template>
    </navigation-list-item>
  </div>
  <div class="float-right">
    <div v-for="item in items" v-bind:key="item.link" class="navigation-list-item">
      <navigation-list-item>
        <template v-slot:navigation-list-item>
          <v-router-link v-bind:link="item.link" v-bind:text="item.text"/>
        </template>
      </navigation-list-item>
    </div>
  </div>
</div>
</template>

<style lang="scss">
#navigation-list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;

  .navigation-list-item {
    float: left;
    width: 200px;
    height: 50px;
  }
}

.float-right {
  float: right;
}
</style>

<script>
import VAnchor from "../atoms/VAnchor"
import VRouterLink from "../atoms/VRouterLink"
import NavigationListItem from "../atoms/NavigationListItem"
import TheLogo from "./TheLogo"
export default {
  name: "the-navigation-list",
  components: {
    VAnchor, VRouterLink, NavigationListItem, TheLogo
  },
  data: function() {
    return {
      "items": [
        // { link: "/", text: "TOP" },
        { link: "/development", text: "Development" },
        { link: "/research", text: "Research" },
        { link: "/study", text: "Study" },
        { link: "/about-me", text: "About Me" },
      ]
    }
  }
}
</script>