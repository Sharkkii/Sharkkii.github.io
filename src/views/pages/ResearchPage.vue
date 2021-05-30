<template>
<div id="research-page">
  <index-template>

    <template v-slot:the-header>
      <div class="header-item">
        <div class="header-text">
          <p>RESEARCH</p>
        </div>
      </div>
    </template>

    <template v-slot:the-main>
      <div>
        <p class="sub-headline">
          Research Interest
        </p>

        <div class="main-item RL">
          <p class="sub-headline">Reinforcement Learning</p>
          <ul class="paragraph">
            <li>
              <p>Control as Inference</p>
            </li>
            <li>
              <p>Inverse Reinforcement Learning (IRL)</p>
            </li>
            <li>
              <p>Imitation Learning (IL)</p>
              <p>-- Generative Adversarial Imitation Learning (GAIL)</p>
            </li>
          </ul>
        </div>
        <div class="main-item DL">
          <p class="sub-headline">Deep Learning</p>
          <ul class="paragraph">
            <li>
              <p>Generative Model</p>
              <p>-- Generative Adversarial Network (GAN)</p>
              <p>-- Variational Auto Encoder (VAE)</p>
              <p>-- Generative Moment Matching Network (GMMN)</p>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </index-template>
</div>
</template>

<style lang="scss" scoped>
#research-page {

  .sub-headline {
    color: $main-color;
    font-size: $fontsize-xlarge;
    font-weight: $fontweight-bold;
    line-height: 100px;
  }

  .header-item {

    border-bottom: solid 2px $main-color;
    box-sizing: border-box;
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

    border-right: solid 1px $main-color;
    border-left: solid 20px $main-color;
    box-sizing: border-box;
    margin-bottom: 50px;
    padding: 20px;

    .sub-headline {
      color: $main-color;
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
import ExternalLink from "../../components/atoms/ExternalLink"
export default {
  name: "research-page",
  components: {
    IndexTemplate, ExternalLink
  }
}
</script>