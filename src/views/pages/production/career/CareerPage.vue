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

            <p class="headline">Summer Internship 2021 @ Preferred Networks (PFN)</p>
            <ul class="paragraph">
              <li>
                <p>
                  I participated in the summer internship held by
                  <external-link link="https://www.preferred.jp/ja/" class="display-inline color-main">
                    <template v-slot:link>
                      Preferred Networks
                    </template>
                  </external-link>
                  .
                </p>
                <p>
                  I was engaged in the development of 
                  <external-link link="https://playgram.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Playgram
                    </template>
                  </external-link>
                  providing programming-education materials for children.
                </p>
                <p>
                  I have created one chapter (a unit of materials) on Artificial Intelligence,
                </p>
                <p>
                  which has been released as the first chapter on AI in Playgram.
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
                  My blog will be published on
                  <external-link link="https://tech.preferred.jp/ja/blog/" class="display-inline color-main">
                    <template v-slot:link>
                      PFN blog
                    </template>
                  </external-link>
                  sooner or after...
                </p>
              </li>
            </ul>

          </div>

          <div class="main-item PFN">

            <p class="headline">Part-time Employee @ Preferred Networks (PFN)</p>
            <ul class="paragraph">
              <li>
                <p>
                  I continue to develop the contents of
                  <external-link link="https://playgram.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Playgram
                    </template>
                  </external-link>
                  from PFN2021 summer internship.
                </p>
                <p>
                  We are planning to enrich the subsequent chapters on AI.
                </p>
              </li>
            </ul>

          </div>
          
          <div class="main-item MatsuoLab">

            <p class="headline">Lecturer of Global Consumer Intelligence (GCI) @ Matsuo Lab.</p>
            <ul class="paragraph">
              <li>
                <p>
                  Chair for Global Consumer Intelligence (GCI) is a course provided by
                  <external-link link="https://weblab.t.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Matsuo lab.
                    </template>
                  </external-link>
                  at the University of Tokyo.
                </p>
                <p>
                  I have given lectures 4 times on data science
                </p>
                <p>
                  (2 times on machine-learning, 2 times on Python or its libraries used in data analysis).
                </p>
                <p>
                  -> More details:
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-2020-summer/" class="display-inline color-main">
                    <template v-slot:link>
                      2020 Summer
                    </template>
                  </external-link>
                  /
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-2020-winter/" class="display-inline color-main">
                    <template v-slot:link>
                      2020 Winter
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
import delay from "../../../../assets/js/const"
import IndexTemplate from "../../../../components/templates/IndexTemplate"
import ExternalLink from "../../../../components/atoms/ExternalLink"
import JustifiedText from "../../../../components/atoms/JustifiedText.vue"
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
    }, delay)
  }
}
</script>