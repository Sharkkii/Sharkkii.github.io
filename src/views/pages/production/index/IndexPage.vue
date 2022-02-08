<template>
<div id="index-page">
  <three-column-layout-template>
    <template v-slot:center-column>

      <!-- About Me -->
      <entry-point link="about-me">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <img v-bind:src="SharkkiiPng" />
            </div>
            <div class="flex-item text">
              <div class="sub-headline">
                <p>ABOUT ME</p>
              </div>
              <div class="paragraph">
                <p>Toshiki Kodera / Sharkkii</p>
                <ul>
                  <li><p>M1 Student @ UTokyo (Sugiyama-Yokoya-Ishida Lab.)</p></li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Research -->
      <entry-point link="research">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <font-awesome-icon icon="graduation-cap"></font-awesome-icon>
            </div>
            <div class="flex-item text">
              <p class="sub-headline">RESEARCH</p>
              <div class="paragraph">
                <p>Reinforcement Learning</p>
                <ul>
                  <li><p>Control as Inference</p></li>
                  <li><p>Partially-Observable MDP</p></li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Development -->
      <entry-point link="development">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <font-awesome-icon icon="laptop-code"></font-awesome-icon>
            </div>
            <div class="flex-item text">
              <p class="sub-headline">DEVELOPMENT</p>
              <div class="paragraph">
                <ul>
                  <li><p>shaRL: Reinforcement Learning Framework</p></li>
                  <li><p>shaDL: Deep Learning Framework</p></li>
                  <li><p>Enshu3: 1-month Research Projects</p></li>
                  <!-- <li><p>Numer0n: My first program</p></li> -->
                </ul>
              </div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Career -->
      <entry-point link="career">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <font-awesome-icon icon="briefcase"></font-awesome-icon>
            </div>
            <div class="flex-item text">
              <p class="sub-headline">CAREER</p>
              <div class="paragraph">
                <ul>
                  <li><p>Summer-Internship/Part-Time-Employee @ PFN</p></li>
                  <li><p>Lecturer of Global Consumer Intelligence @ UTokyo (Matsuo Lab.)</p></li>
                </ul>
              </div>
            </div>
          </div>
        </template>
      </entry-point>

      <!-- Study -->
      <!-- <entry-point link="study">
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <font-awesome-icon icon="book"></font-awesome-icon>
            </div>
            <div class="flex-item text">
              <p class="sub-headline">STUDY</p>
              <ul class="paragraph">
                <li><p>Tech Blog</p></li>
              </ul>
            </div>
          </div>
        </template>
      </entry-point> -->

      <!-- Under Construction -->
      <entry-point link="not-found" disabled>
        <template v-slot:content>
          <div class="flex-container">
            <div class="flex-item image">
              <font-awesome-icon icon="spinner"></font-awesome-icon>
            </div>
            <div class="flex-item text">
              <p class="sub-headline">UNDER CONSTRUCTION...</p>
            </div>
          </div>
        </template>
      </entry-point>

    </template>
  </three-column-layout-template>
</div>
</template>

<style lang="scss">
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

  @include EntryPointSize($class:".entry-point", $width:$outer-container-width, $height:$outer-container-height, $border-width:$border-width, $border-width-hover:1vw);

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

  .sub-headline {
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
import SharkkiiPng from "../../../../assets/img/sharkkii.png"
import InternalLink from "../../../../components/atoms/InternalLink.vue"
import EntryPoint from "../../../../components/organisms/EntryPoint.vue"
import ThreeColumnLayoutTemplate from "../../../../components/templates/ThreeColumnLayoutTemplate.vue"
export default {
  name: "IndexPage",
  components: {
    InternalLink, EntryPoint, ThreeColumnLayoutTemplate
  },
  data: function() {
    return {
      SharkkiiPng
    }
  }
}
</script>
