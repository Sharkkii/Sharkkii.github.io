<template>
<div id="development-page">
  <div class="page">

    <index-template v-bind:flag="flag">

      <template v-slot:the-header>
        <div class="header-item">
          <div class="header-text">
            <justified-text v-bind:text="'DEVELOPMENT'">
            </justified-text>
          </div>
        </div>
      </template>

      <template v-slot:the-main>
        <div>

          <external-link link="https://github.com/Sharkkii/shaRL">
            <template v-slot:link>
              <div class="main-item shaRL">
                <p class="headline">shaRL: Reinforcement Learning Framework</p>
                <ul class="paragraph">
                  <li>
                    <p>The concept is "Reinforcement Learning by building blocks"</p>
                  </li>
                  <li>
                    <p>shaRL makes RL programs easy to write</p>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/shaDL">
            <template v-slot:link>
              <div class="main-item shaDL">
                <p class="headline">shaDL: Deep Learning Framework</p>
                <ul class="paragraph">
                  <li>
                    <p>The concept is "Deep Learning by building blocks"</p>
                  </li>
                  <li>
                    <p>shaDL makes DL programs easy to write</p>
                  </li>
                  <li>
                    <p>This is for my own sake; to understand how a DL library works</p>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/Sharkkii.github.io">
            <template v-slot:link>
              <div class="main-item sharkkii-github-io">
                <p class="headline">Sharkkii.github.io</p>
                <ul class="paragraph">
                  <li>
                    <p>This is my own website developed with Vue.js framework</p>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/Enshu3">
            <template v-slot:link>
              <div class="main-item Enshu3">
                <p class="headline">Enshu3: 1-month Research Projects</p>
                <ul class="paragraph">
                  <li>
                    <p>Enshu3 is a course of the Dept. of Information Science, UTokyo</p>
                  </li>
                  <li>
                    <p>3 projects (1-month per 1-project)</p>
                    <ul>
                      <li>
                        <p>1st project: Quantized Neural Network (QNN)</p>
                      </li>
                      <li>
                        <p>2nd project: Generative Adversarial Imitation Learning (GAIL)</p>
                      </li>
                      <li>
                        <p>3rd project: Evolutionary Algorithm (EA)</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/Aiproject">
            <template v-slot:link>
              <div class="main-item Aiproject">
                <p class="headline">Aiproject: AI-powered Task Manager</p>
                <ul class="paragraph">
                  <li>
                    <p>This development project was created in a course of Graduate School of IST, UTokyo</p>
                  </li>
                  <li>
                    <p>The job scheduling system is based on reinforcement learning techniques (implemented in shaRL framework)</p>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/Numer0n">
                <template v-slot:link>
              <div class="main-item Numer0n">
                <p class="headline">Numer0n: Number-Guessing Game</p>
                <ul class="paragraph">
                  <li>
                    <p>I have created Game-AI for Numer0n in Python</p>
                  </li>
                  <li>
                    <p>This is the first program I wrote!</p>
                  </li>
                </ul>
              </div>
            </template>
          </external-link>

          <external-link link="https://github.com/Sharkkii/Othello">
            <template v-slot:link>
              <div class="main-item Othello">
                <p class="headline">Othello: Othello Game Written by Python</p>
                <!-- <ul class="paragraph"></ul> -->
              </div>
            </template>
          </external-link>

        </div>
        
      </template>
    </index-template>
  </div>
</div>
</template>

<style lang="scss" scoped>
#development-page {

  .main-item {

    color: $main-color;

    .headline {
      color: inherit;
    }

    transition-property: color, border-left, border-right;
    transition-duration: 1s, 1s, 1s;

    &:hover {
      border-left: solid 20px $main-color-20;
      border-right: solid 1px $main-color-20;
      color: $main-color-20;
    }

  }
  
}
</style>

<script>
import IndexTemplate from "../../../../components/templates/IndexTemplate"
import ExternalLink from "../../../../components/atoms/ExternalLink"
import JustifiedText from "../../../../components/atoms/JustifiedText.vue"
export default {
  name: "development-page",
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