<template>
<div id="the-side-navigation-list">
  <div class="flex-container">

    <side-navigation-list-item class="flex-item" v-bind:link="'/'">
      <template v-slot:side-navigation-list-item>
        <logo/>
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

  </div>
</div>
</template>

<style lang="scss" scoped>
#the-side-navigation-list {

  $logo-height: $side-navigation-item-height;
  $logo-width: $side-navigation-item-width;
  @include LogoSize($width:$logo-width, $height:$logo-height, $font-size:$fontsize-xlarge);

  height: $side-navigation-height;
  width: $side-navigation-width;
  
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .flex-item {
    height: $side-navigation-item-height;
    width: 100%;
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
import Logo from "../Logo"
export default {
  name: "the-side-navigation-list",
  components: {
    InternalLink, SideNavigationListItem, SharkkiiIcon, ResearchIcon, DevelopmentIcon, CareerIcon, AboutMeIcon, Logo
  }
}
</script>