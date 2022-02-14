<template>
<div id="research-page">
  <div class="page">

    <index-template>
      <template v-slot:the-header>
        <div class="header-item">
          <div class="header-text">
            <justified-text v-bind:text="'RESEARCH'">
            </justified-text>
          </div>
        </div>
      </template>

      <template v-slot:the-main>
        <div>
          <p class="headline">
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
</div>
</template>

<style lang="scss" scoped>
#research-page {
}
</style>

<script>
import IndexTemplate from "../../../../components/templates/IndexTemplate"
import ExternalLink from "../../../../components/atoms/ExternalLink"
import JustifiedText from "../../../../components/atoms/JustifiedText.vue"
export default {
  name: "research-page",
  components: {
    IndexTemplate, ExternalLink, JustifiedText
  }
}
</script>