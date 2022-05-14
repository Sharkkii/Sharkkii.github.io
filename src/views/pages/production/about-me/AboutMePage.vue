<template>
<div id="about-me-page">
  <div class="page">
    
    <index-template v-bind:flag="flag">

      <template v-slot:the-header>
        <div class="header-item">
          <div class="header-text">
            <justified-text v-bind:text="'ABOUT ME'">
            </justified-text>
          </div>
        </div>
      </template>

      <template v-slot:the-main>
        <div>
          <div class="main-item name">
            <p class="headline">Name</p>
            <div class="paragraph">
              <p>Toshiki Kodera</p>
            </div>
          </div>
          <div class="main-item affiliation">
            <p class="headline">Affiliation</p>
            <ul class="paragraph">
              <li>
                <p>2nd-year Master Student @ Dept. of CS, Graduate School of IST, UTokyo
                </p>
                <p>
                  --
                  <external-link link="https://www.is.s.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      CS (Computer Science)
                    </template>
                  </external-link>
                </p>
                <p>
                  --
                  <external-link link="https://www.i.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      IST (Information Science and Technology)  
                    </template>
                  </external-link>
                </p>
                <p>
                  --
                  <external-link link="https://www.u-tokyo.ac.jp/ja/index.html" class="display-inline color-main">
                    <template v-slot:link>
                      UTokyo (the University of Tokyo)
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>A Member of
                  <external-link link="http://www.ms.k.u-tokyo.ac.jp/index-jp.html" class="display-inline color-main">
                    <template v-slot:link>
                      Sugiyama-Yokoya-Ishida Lab.
                    </template>
                  </external-link>
                </p>
              </li>
            </ul>
          </div>
          <div class="main-item educational-history">
            <p class="headline">Educational History</p>
            <ul class="paragraph">
              <li>
                <p>April 2021 - <span class="fontweight-bold">present</span></p>
                <p>Dept. of Computer Science, the University of Tokyo</p>
              </li>
              <li>
                <p>April 2019 - March 2021</p>
                <p>Dept. of Information Science, the University of Tokyo</p>
              </li>
              <li>
                <p>April 2017 - March 2019</p>
                <p>College of Arts and Sciences, the University of Tokyo</p>
              </li>
            </ul>
          </div>
          <div class="main-item professional-history">
            <p class="headline">Professioanl History</p>
            <ul class="paragraph">
              <li>
                <p>October 2021 - <span class="fontweight-bold">present</span></p>
                <p>
                  Part-time Employee @
                  <external-link link="https://www.preferred.jp/ja/" class="display-inline color-main">
                    <template v-slot:link>
                      Preferred Networks
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>August 2021 - September 2021</p>
                <p>
                  Summer Internship @ Preferred Networks
                </p>
                <p>
                  --
                  <external-link link="https://www.preferred.jp/ja/news/internship2021/" class="display-inline color-main">
                    <template v-slot:link>
                      PFN2021 Summer Internship
                    </template>
                  </external-link>
                </p>
                <p>
                  --
                  <external-link link="https://tech.preferred.jp/ja/blog/education-playgram-ai-chapter/" class="display-inline color-main">
                    <template v-slot:link>
                      PFN Blog: "Programming-education from Scratch: Development of AI Teaching-materials @ Playgram"
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>April 2020 - March 2022</p>
                <p>
                  Lecture @ Chair for Global Consumer Intelligence provided by
                  <external-link link="https://weblab.t.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Matsuo Lab.
                    </template>
                  </external-link>
                </p>
                <p>
                  --
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
              <li>
                <p>April 2019 - March 2020</p>
                <p>
                  Course Management @ Chair for Global Consumer Intelligence
                </p>
                <p>
                  --
                  <external-link link="https://gci.t.u-tokyo.ac.jp/6th-course/" class="display-inline color-main">
                    <template v-slot:link>
                      2019 Summer
                    </template>
                  </external-link>
                  /
                  <external-link link="https://gci.t.u-tokyo.ac.jp/gci-komaba-2019/" class="display-inline color-main">
                    <template v-slot:link>
                      2019 Winter
                    </template>
                  </external-link>
                </p>
              </li>
            </ul>
          </div>
          <div class="main-item qualification">
            <p class="headline">Qualification</p>
            <ul class="paragraph">
              <li>
                <p>
                  Applied Information Technology Engineer Examination by
                  <external-link link="https://www.ipa.go.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      IPA (Information-technology Promotion Agency)
                    </template>
                  </external-link>
                </p>
              </li>
            </ul>
          </div>
          <div class="main-item account">
            <p class="headline">Account</p>
            <ul class="paragraph">
              <li>
                <p>
                  GitHub Account:
                  <external-link link="https://github.com/Sharkkii" class="display-inline color-main">
                    <template v-slot:link>
                      Sharkkii
                    </template>
                  </external-link>
                </p>
              </li>
              <li>
                <p>
                  Twitter Account:
                  <external-link link="https://twitter.com/Toshiki_Kodera" class="display-inline color-main">
                    <template v-slot:link>
                      Toshiki Kodera (@Toshiki_Kodera)
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
#about-me-page {
}
</style>

<script>
import IndexTemplate from "@/components/templates/IndexTemplate"
import ExternalLink from "@/components/atoms/ExternalLink"
import JustifiedText from "@/components/atoms/JustifiedText.vue"
export default {
  name: "about-me-page",
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