<template>
<div id="root-page">
  <index-template>

    <template v-slot:the-header>
      <div class="header-item">
        <div class="header-text">
          <p>SHARKKII</p>
        </div>
      </div>
    </template>

    <template v-slot:the-main>
      <!-- About Me -->
      <div class="abstract main-item">
        <internal-link link="about-me">
          <template v-slot:link>
            <div class="abstract-container">
              <div class="abstract-image">
                <img v-bind:src="SharkkiiPng" />
              </div>
              <div class="abstract-text">
                <div>
                  <p class="sub-headline">ABOUT ME</p>
                </div>
                <div class="paragraph">
                  <p>Toshiki Kodera / Sharkkii</p>
                  <p>1st-year Master Student</p>
                  <p>@ The University of Tokyo (Sugiyama-Yokoya-Ishida Lab.)</p>
                </div>
              </div>
            </div>
          </template>
        </internal-link>
      </div>
      <!-- Research -->
      <div class="abstract main-item">
        <internal-link link="research">
          <template v-slot:link>
            <div class="abstract-container">
              <div class="abstract-image">
                <font-awesome-icon icon="graduation-cap"></font-awesome-icon>
              </div>
              <div class="abstract-text">
                <div>
                  <p class="sub-headline">RESEARCH</p>
                  <ul class="paragraph">
                    <li>
                      <p>Reinforcement Learning</p>
                      <p>-- Control as Inference, Imitation Learning</p>
                    </li>
                    <li>
                      <p>Deep Learning</p>
                      <p>-- Generative Model (GAN, VAE)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </internal-link>
      </div>
      <!-- Development -->
      <div class="abstract main-item">
        <internal-link link="development">
          <template v-slot:link>
            <div class="abstract-container">
              <div class="abstract-image">
                <font-awesome-icon icon="cogs"></font-awesome-icon>
              </div>
              <div class="abstract-text">
                <div>
                  <p class="sub-headline">DEVELOPMENT</p>
                  <ul class="paragraph">
                    <li><p>shaRL: Reinforcement Learning Framework</p></li>
                    <li><p>shaDL: Deep Learning Framework</p></li>
                    <li><p>Enshu3: 1-month Research Projects</p></li>
                    <!-- <li><p>Numer0n: My first program</p></li> -->
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </internal-link>
      </div>
      <!-- Study -->
      <div class="abstract main-item">
        <internal-link link="study">
          <template v-slot:link>
            <div class="abstract-container">
              <div class="abstract-image">
                <font-awesome-icon icon="book"></font-awesome-icon>
              </div>
              <div class="abstract-text">
                <div>
                  <p class="sub-headline">STUDY</p>
                  <ul class="paragraph">
                    <li><p>Tech Blog</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </internal-link>
      </div>
    </template>
  </index-template>
</div>
</template>

<style scoped lang="scss">
#root-page {

  .abstract-container {

    clear: both;
    border-left: solid 1px $main-color;
    border-right: solid 20px $main-color;
    box-sizing: border-box;
    height: $abstract-height;
    padding: 0 20px;
    margin-bottom: 50px;
    width: 100%;

    color: $main-color;
    transition-property: color, border-left, border-right;
    transition-duration: 1s, 1s, 1s;

    &:hover {
      border-left: solid 1px $main-color-20;
      border-right: solid 20px $main-color-20;
      color: $main-color-20;
    }

    &:hover .abstract-image img {
      opacity: 0.5;
    }

    .abstract-image {
      float: left;
      height: $abstract-height;
      width: $abstract-image-width;
      
      // for font-awesome icon
      font-size: 150px;
      line-height: $abstract-height;
      text-align: center;

      // for PNG image
      img {
        height: $abstract-height;
        width: $abstract-image-width;
        opacity: 1.0;
        transition-property: opacity;
        transition-duration: 1s;
      }
    }

    .abstract-text {
      float: left;
      padding: 20px;
    }

  }

  .header-item {

    box-sizing: border-box;
    border-bottom: solid 2px $main-color;
    height: 400px;
    margin: 0 auto;
    width: 90%;

    .header-text {
      color: $main-color;
      font-size: 100px;
      letter-spacing: 50px;
      line-height: 400px;
      text-align: center;
      text-indent: 50px;
    }

  }

  .main-item {

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

}

</style>

<script>
import IndexTemplate from "../../components/templates/IndexTemplate"
import InternalLink from "../../components/atoms/InternalLink"
import SharkkiiPng from "../../assets/img/sharkkii.png"
export default {
  name: "root-page",
  data: function() {
    return {
      SharkkiiPng
    }
  },
  components: {
    IndexTemplate, InternalLink
  }
}
</script>