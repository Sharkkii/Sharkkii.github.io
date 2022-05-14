<template>
<div id="the-side-navigation-list">
  <div class="flex-container">

    <side-navigation-list-item class="flex-item" v-bind:link="'/'">
      <template v-slot:side-navigation-list-item>
        <sharkkii-icon v-bind:hasText="isTablet || isPc"/>
      </template>
    </side-navigation-list-item>

    <side-navigation-list-item class="flex-item" v-bind:link="'/research'">
      <template v-slot:side-navigation-list-item>
        <research-icon v-bind:hasText="isTablet || isPc"/>
      </template>
    </side-navigation-list-item>

    <side-navigation-list-item class="flex-item" v-bind:link="'/development'">
      <template v-slot:side-navigation-list-item>
        <development-icon v-bind:hasText="isTablet || isPc"/>
      </template>
    </side-navigation-list-item>

    <side-navigation-list-item class="flex-item" v-bind:link="'/career'">
      <template v-slot:side-navigation-list-item>
        <career-icon v-bind:hasText="isTablet || isPc"/>
      </template>
    </side-navigation-list-item>

    <side-navigation-list-item class="flex-item" v-bind:link="'/about-me'">
      <template v-slot:side-navigation-list-item>
        <about-me-icon v-bind:hasText="isTablet || isPc"/>
      </template>
    </side-navigation-list-item>

    <div class="flex-item social-icon">
      <the-social-icon v-bind:width="sideNavigationItemWidth" v-bind:height="sideNavigationItemHeight" />
    </div>

  </div>
</div>
</template>

<style lang="scss" scoped>
#the-side-navigation-list {

  height: $side-navigation-height;
  width: $side-navigation-width;
  
  .flex-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .flex-item {
    height: $side-navigation-item-height;
    width: 100%;
  }

  .social-icon {
    margin-top: auto;
  }

}
</style>

<script>
import SharkkiiIcon from "@/components/atoms/icons/SharkkiiIcon.vue"
import ResearchIcon from "@/components/atoms/icons/ResearchIcon.vue"
import DevelopmentIcon from "@/components/atoms/icons/DevelopmentIcon.vue"
import CareerIcon from "@/components/atoms/icons/CareerIcon.vue"
import AboutMeIcon from "@/components/atoms/icons/AboutMeIcon.vue"
import InternalLink from "../../atoms/InternalLink"
import SideNavigationListItem from "../../atoms/navigations/SideNavigationListItem"
import TheSocialIcon from '@/components/molecules/TheSocialIcon.vue'
import { sideNavigationItemWidth, sideNavigationItemHeight } from "@/assets/js/resources.js"
export default {
  name: "the-side-navigation-list",
  components: {
    InternalLink, SideNavigationListItem, SharkkiiIcon, ResearchIcon, DevelopmentIcon, CareerIcon, AboutMeIcon, TheSocialIcon
  },
  computed: {
    sideNavigationItemWidth: function() {
      return sideNavigationItemWidth(this.screenWidth);
    },
    sideNavigationItemHeight: function() {
      return sideNavigationItemHeight(this.screenHeight);
    }
  }
}
</script>
    TheSocialIcon