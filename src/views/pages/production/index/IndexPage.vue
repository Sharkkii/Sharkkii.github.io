<template>
<div id="index-page">
  <three-column-layout-template v-bind:flag="flag">

    <template v-slot:center-column>

      <!-- About Me -->
      <entry-point link="about-me" v-bind:width="entryPointWidth" v-bind:height="entryPointHeight" v-bind:borderWidth="entryPointBorderWidth" v-bind:borderWidthHover="entryPointBorderWidthHover">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <img v-bind:src="SharkkiiPng" />
            </div>
            <div class="flex-item text" v-if="isPc || isTablet">
              <div class="headline">
                <p>ABOUT ME</p>
              </div>
              <div class="paragraph">
                <p>Toshiki Kodera / Sharkkii</p>
                <ul>
                  <li><p>M1 Student @ UTokyo (Sugiyama-Yokoya-Ishida Lab.)</p></li>
                </ul>
              </div>
            </div>
            <div class="flex-item text" v-if="isMobile">
              <expand-div class="headline">
                <centerized-text v-bind:text="'ABOUT ME'">
                </centerized-text>
              </expand-div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Research -->
      <entry-point link="research" v-bind:width="entryPointWidth" v-bind:height="entryPointHeight" v-bind:borderWidth="entryPointBorderWidth" v-bind:borderWidthHover="entryPointBorderWidthHover">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <fa icon="graduation-cap"></fa>
            </div>
            <div class="flex-item text" v-if="isPc || isTablet">
              <p class="headline">RESEARCH</p>
              <div class="paragraph">
                <p>Reinforcement Learning</p>
                <ul>
                  <li><p>Partially-Observable MDP</p></li>
                  <li><p>Control as Inference</p></li>
                </ul>
              </div>
            </div>
            <div class="flex-item text" v-if="isMobile">
              <expand-div class="headline">
                <centerized-text v-bind:text="'RESEARCH'">
                </centerized-text>
              </expand-div>
            </div>

          </div>
        </template>
      </entry-point>

      <!-- Development -->
      <entry-point link="development" v-bind:width="entryPointWidth" v-bind:height="entryPointHeight" v-bind:borderWidth="entryPointBorderWidth" v-bind:borderWidthHover="entryPointBorderWidthHover">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <fa icon="laptop-code"></fa>
            </div>
            <div class="flex-item text" v-if="isTablet || isPc">
              <p class="headline">DEVELOPMENT</p>
              <div class="paragraph">
                <ul>
                  <li><p>shaRL: Reinforcement Learning Framework</p></li>
                  <li><p>shaDL: Deep Learning Framework</p></li>
                  <li><p>Enshu3: 1-month Research Projects</p></li>
                  <li><p>Aiproject: AI-powered Task Manager</p></li>
                </ul>
              </div>
            </div>
            <div class="flex-item text" v-if="isMobile">
              <expand-div class="headline">
                <centerized-text v-bind:text="'DEVELOP'">
                </centerized-text>
              </expand-div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Career -->
      <entry-point link="career" v-bind:width="entryPointWidth" v-bind:height="entryPointHeight" v-bind:borderWidth="entryPointBorderWidth" v-bind:borderWidthHover="entryPointBorderWidthHover">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <fa icon="briefcase"></fa>
            </div>
            <div class="flex-item text" v-if="isTablet || isPc">
              <p class="headline">CAREER</p>
              <div class="paragraph">
                <ul>
                  <li><p>Summer-Internship/Part-Time-Employee @ Preferred Networks</p></li>
                  <li><p>Lecturer on Global Consumer Intelligence @ UTokyo (Matsuo Lab.)</p></li>
                </ul>
              </div>
            </div>
            <div class="flex-item text" v-if="isMobile">
              <expand-div class="headline">
                <centerized-text v-bind:text="'CAREER'">
                </centerized-text>
              </expand-div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Under Construction -->
      <entry-point link="not-found" disabled v-bind:width="entryPointWidth" v-bind:height="entryPointHeight" v-bind:borderWidth="entryPointBorderWidth" v-bind:borderWidthHover="entryPointBorderWidthHover" v-for="n in 2" v-bind:key="n">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <fa icon="spinner"></fa>
            </div>
            <div class="flex-item text" v-if="isTablet || isPc">
              <p class="headline">UNDER CONSTRUCTION</p>
            </div>
            <div class="flex-item text" v-if="isMobile">
              <expand-div class="paragraph">
                <centerized-text v-bind:text="'UNDER CONSTRUCTION'">
                </centerized-text>
              </expand-div>
            </div>
          </div>
        </template>
      </entry-point>

    </template>
  </three-column-layout-template>
</div>
</template>

<style lang="scss" scoped>
$border-width: 3vw;
$outer-content-height: 12vw;
$outer-container-height: calc(#{$outer-content-height} + 2 * #{$border-width});
$outer-content-width: 48vw;
$outer-container-width: calc(#{$outer-content-width} + 2 * #{$border-width});

$image-height: 9vw;
$image-width: 9vw;
$text-height: 9vw;
$text-width: 27vw;

#index-page {

  .entry-point {

    margin: 5vw auto;
    
    transition-property: opacity;
    transition-duration: 1s;
    &:hover {
      img {
        opacity: 0.5;
      }
    }
    &[disabled] {
      opacity: 0.1;
    }
    
  }

  .flex-container {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }

  .image {

    height: $image-height;
    width: $image-width;
      
    // for font-awesome icon
    font-size: $image-height;
    line-height: $image-height;
    text-align: center;

    // for PNG image
    img {
      height: $image-height;
      aspect-ratio: 1;
      opacity: 1.0;
      transition-property: opacity;
      transition-duration: 1s;
    }

  }

  .text {

    box-sizing: border-box;
    height: $text-height;
    width: $text-width;
    
  }

  .headline {
    font-size: $fontsize-large;
    font-weight: $fontweight-bold;
    line-height: $lineheight-large;
  }

  .paragraph {
    font-size: $fontsize-medium;
    font-weight: $fontweight-normal;
    line-height: $lineheight-medium;
  }

}
</style>

<script>
import SharkkiiPng from "@/assets/img/sharkkii.png"
import InternalLink from "@/components/atoms/InternalLink.vue"
import EntryPoint from "@/components/organisms/EntryPoint.vue"
import ThreeColumnLayoutTemplate from "@/components/templates/ThreeColumnLayoutTemplate.vue"
import { MediaQueryMixin } from "@/assets/js/mixin"
import CenterizedText from "@/components/atoms/CenterizedText.vue"

export default {
  name: "IndexPage",
  components: {
    InternalLink, EntryPoint, ThreeColumnLayoutTemplate, CenterizedText
  },
  mixins: [
    MediaQueryMixin
  ],
  data: function() {
    return {
      SharkkiiPng,
      flag: false
    }
  },
  computed: {
    entryPointWidth: function() {
      if (this.isMobile) { return "54vw" }
      else if (this.isTablet) { return "54vw" }
      else if (this.isPc) { return "54vw" }
    },
    entryPointHeight: function() {
      if (this.isMobile) { return "18vw" }
      else if (this.isTablet) { return "18vw" }
      else if (this.isPc) { return "18vw" }
    },
    entryPointBorderWidth: function() {
      if (this.isMobile) { return "3vw" }
      else if (this.isTablet) { return "3vw" }
      else if (this.isPc) { return "3vw" }
    },
    entryPointBorderWidthHover: function() {
      if (this.isMobile) { return "1vw" }
      else if (this.isTablet) { return "1vw" }
      else if (this.isPc) { return "1vw" }
    }
  },
  mounted: function() {
    this.flag = true
  },
  beforeRouteLeave: function(to, from, next) {
    this.flag = false
    setTimeout(function() {
      next()
    }, this.$delay)
  }
}
</script>
