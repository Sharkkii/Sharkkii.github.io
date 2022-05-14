<template>
<div id="career-page">
  <div class="page">

    <index-template v-bind:flag="flag">

      <template v-slot:the-header>
        <div class="header-item">
          <div class="header-text">
            <justified-text v-bind:text="'CAREER'">
            </justified-text>
          </div>
        </div>
      </template>

      <template v-slot:the-main>
        <div>

          <div class="main-item PFN">

            <p class="headline">Summer Internship 2021 @ Preferred Networks</p>
            <br>
            <b><p>What I have done</p></b>
            <ul class="paragraph">
              <li>
                <p>
                  I participated in the summer internship held by
                  <external-link link="https://www.preferred.jp/ja/" class="display-inline color-main">
                    <template v-slot:link>
                      Preferred Networks (PFN)
                    </template>
                  </external-link>
                </p>
                <p>
                  -> More details:
                  <external-link link="https://www.preferred.jp/ja/news/internship2021/" class="display-inline color-main">
                    <template v-slot:link>
                      PFN2021 summer internship
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>
                  I was engaged in the development of 
                  <external-link link="https://playgram.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Playgram
                    </template>
                  </external-link>
                  providing programming-education materials for children. I have created one chapter (a unit of materials) on Artificial Intelligence, which has been released as the first chapter on AI in Playgram!
                </p>
              </li>
            </ul>
            <br>
            <b><p>Blog</p></b>
            <ul class="paragraph">
              <li>
                <p>
                  My blog has been published:
                </p>
                <p>
                  <external-link link="https://tech.preferred.jp/ja/blog/education-playgram-ai-chapter/" class="display-inline color-main">
                    <template v-slot:link>
                      PFN Blog: "Programming-education from Scratch: Development of AI Teaching-materials @ Playgram"
                    </template>
                  </external-link>
                </p>
              </li>
            </ul>

          </div>

          <div class="main-item PFN">

            <p class="headline">Part-time Employee @ Preferred Networks</p>
            <br>
            <b><p>What I'm doing now</p></b>
            <ul class="paragraph">
              <li>
                <p>
                  I continue to develop the contents of Playgram from PFN2021 summer internship, planning to enrich the subsequent chapters on AI.
                </p>
              </li>
            </ul>

          </div>
          
          <div class="main-item MatsuoLab">

            <p class="headline">Lecturer of GCI @ Matsuo Lab.</p>
            <br>
            <b><p>What I have done</p></b>
            <ul class="paragraph">
              <li>
                <p>
                  Chair for Global Consumer Intelligence (GCI) is a data science course provided by
                  <external-link link="https://weblab.t.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Matsuo lab.
                    </template>
                  </external-link>
                  at the University of Tokyo.
                </p>
                <p>
                  More details -> 
                  <external-link link="https://gci.t.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Global Consumer Intelligence (GCI)
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>
                  I have given 3 lectures on data science (DS) & machine learning (ML).
                </p>
                <p>
                  (2 lectures on the basics of ML, 1 lecture on Python language commonly used in DS & ML)
                </p>
                <p>
                  -> More details:
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-2020-summer/" class="display-inline color-main">
                    <template v-slot:link>
                      2020 Summer
                    </template>
                  </external-link>
                  /
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-2021-summer/" class="display-inline color-main">
                    <template v-slot:link>
                      2021 Summer
                    </template>
                  </external-link>
                  /
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-2021-winter/" class="display-inline color-main">
                    <template v-slot:link>
                      2021 Winter
                    </template>
                  </external-link>
                </p>
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
#career-page {
}
</style>

<script>
import IndexTemplate from "@/components/templates/IndexTemplate"
import ExternalLink from "@/components/atoms/ExternalLink"
import JustifiedText from "@/components/atoms/JustifiedText.vue"
export default {
  name: "career-page",
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