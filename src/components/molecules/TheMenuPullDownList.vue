<template>
<div id="menu-pull-down-list">
  <div v-for="item in items" v-bind:key="item.link">
    <menu-pull-down-list-item>
      <template v-slot:menu-pull-down-list-item>
        <v-router-link v-bind:link="item.link" v-bind:text="item.text"/>
      </template>
    </menu-pull-down-list-item>
  </div>
</div>
</template>

<style lang="scss">
#menu-pull-down-list {
  width: 200px;
  // height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
</style>

<script>
import VAnchor from "../atoms/VAnchor"
import VRouterLink from "../atoms/VRouterLink"
import MenuPullDownListItem from "../atoms/MenuPullDownListItem"
export default {
  name: "the-menu-pull-down-list",
  components: {
    VAnchor, VRouterLink, MenuPullDownListItem
  },
  data: function() {
    return {
      "items": [
        { link: "/", text: "TOP" },
        { link: "/about-me", text: "About Me" },
        { link: "/development", text: "Development" },
        { link: "/research", text: "Research" },
        { link: "/study", text: "Study" }
      ]
    }
  }
}
</script>