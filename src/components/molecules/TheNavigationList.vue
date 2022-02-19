<template>
<div id="the-navigation-list">
  <div class="flex-container">
  
    <navigation-list-item class="margin-right-auto flex-item" v-bind:link="'/'">
      <template v-slot:navigation-list-item>
        <sharkkii-icon v-bind:hasText="isPc"/>
      </template>
    </navigation-list-item>

    <navigation-list-item class="flex-item" v-bind:link="'/research'">
      <template v-slot:navigation-list-item>
        <research-icon v-bind:hasText="isPc"/>
      </template>
    </navigation-list-item>

    <navigation-list-item class="flex-item" v-bind:link="'/development'">
      <template v-slot:navigation-list-item>
        <development-icon v-bind:hasText="isPc"/>
      </template>
    </navigation-list-item>

    <navigation-list-item class="flex-item" v-bind:link="'/career'">
      <template v-slot:navigation-list-item>
        <career-icon v-bind:hasText="isPc"/>
      </template>
    </navigation-list-item>

    <navigation-list-item class="flex-item" v-bind:link="'/about-me'">
      <template v-slot:navigation-list-item>
        <about-me-icon v-bind:hasText="isPc"/>
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
import SharkkiiIcon from "@/components/atoms/icons/SharkkiiIcon.vue"
import ResearchIcon from "@/components/atoms/icons/ResearchIcon.vue"
import DevelopmentIcon from "@/components/atoms/icons/DevelopmentIcon.vue"
import CareerIcon from "@/components/atoms/icons/CareerIcon.vue"
import AboutMeIcon from "@/components/atoms/icons/AboutMeIcon.vue"
import InternalLink from "@/components/atoms/InternalLink"
import NavigationListItem from "@/components/atoms/NavigationListItem"
export default {
  name: "the-navigation-list",
  components: {
    InternalLink, NavigationListItem, SharkkiiIcon, ResearchIcon, DevelopmentIcon, CareerIcon, AboutMeIcon
  }
}
</script>