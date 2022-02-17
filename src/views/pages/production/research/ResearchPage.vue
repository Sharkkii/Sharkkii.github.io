<template>
<div id="research-page">
  <div class="page">
    
    <index-template v-bind:flag="flag">

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

          <div class="main-item reinforcement-learning">
            <p class="headline">Reinforcement Learning</p>
            <br>
            <b><p>Partially-Observable MDP</p></b>
            <ul class="paragraph">
              <li>
                <p>My current research interest lies in partially-observable environment models, which are more realistic than fully-observable ones</p>
              </li>
              <li>
                <p>I have been striving to discover a "nice" structure with which the agent can efficiently or effectively solve RL problems</p>
              </li>
            </ul>
            <br>
            <b><p>Control as Inference</p></b>
            <ul class="paragraph">
              <li>
                <p>Control as Inference (CaI) is a probabilistic generative model for RL</p>
              </li>
              <li>
                <p>CaI framework can provide another explanation for entropy-regularized RL (and other RL problem settings)</p>
              </li>
              <li>
                <p>This was the research topic of my bachelor thesis!</p>
              </li>
            </ul>
          </div>
          <div class="main-item probabilistic-model">
            <p class="headline">Probabilistic Model & Representation Learning</p>
            <br>
            <b><p>Probabilistic Model</p></b>
            <ul class="paragraph">
              <li>
                <p>I'm curious about what structure (probabilistic model) is "nice" for RL, which seems to be far more difficult than other problem settings (supervise learning, unsupervised learning)</p>
              </li>
              <li>
                <p>Also interested in generative models such as Generative Adversarial Network (GAN), Variational Auto Encoder (VAE), Generative Moment Matching Network (GMMN)</p>
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
  },
  data: function() {
    return {
      flag: false
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