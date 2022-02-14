<template>
<div id="development-page">
  <div class="page">
    <index-template>
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
                    <p>Try to make RL programs easy to write; RL by building blocks</p>
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
                    <p>Try to make DL programs easy to write; DL by building blocks</p>
                  </li>
                  <li>
                    <p>This is for my own sake; to understand how a DL library works</p>
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
                    <p>Enshu3 is a course of the Dept. of Information Science, UT</p>
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

          <external-link link="https://github.com/Sharkkii/Numer0n">
                <template v-slot:link>
              <div class="main-item Numer0n">
                <p class="headline">Numer0n: Number-Guessing Game</p>
                <ul class="paragraph">
                  <li>
                    <p>Create Game AI for Numer0n</p>
                  </li>
                  <li>
                    <p>This is the first program I made!</p>
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

          <external-link link="https://github.com/Sharkkii/Archive">
            <template v-slot:link>
              <div class="main-item Archive">
                <p class="headline">Archive: A Collection of Algorithms</p>
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
  name: "Development-page",
  components: {
    IndexTemplate, ExternalLink, JustifiedText
  }
}
</script>