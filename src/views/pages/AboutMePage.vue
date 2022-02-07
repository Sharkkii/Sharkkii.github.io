<template>
<div id="about-me-page">
  <div class="page">
    <index-template>

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
            <p class="sub-headline">Name</p>
            <div class="paragraph">
              <p>Toshiki Kodera</p>
            </div>
          </div>
          <div class="main-item affiliation">
            <p class="sub-headline">Affiliation</p>
            <ul class="paragraph">
              <li>
                <p>1st-year Master Student</p>
                <p>@ Dept. of Computer Science,
                  <external-link link="https://www.i.u-tokyo.ac.jp/" class="display-inline color-main">
                    <template v-slot:link>
                      Graduate School of Information Science and Technology, The University of Tokyo
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
            <p class="sub-headline">Educational History</p>
            <ul class="paragraph">
              <li>
                <p>April 2021 - <span class="fontweight-bold">present</span></p>
                <p>the Dept. of Computer Science, the University of Tokyo</p>
              </li>
              <li>
                <p>April 2019 - March 2021</p>
                <p>the Dept. of Information Science, the University of Tokyo</p>
              </li>
              <li>
                <p>April 2017 - March 2019</p>
                <p>College of Arts and Sciences, the University of Tokyo</p>
              </li>
            </ul>
          </div>
          <div class="main-item professional-history">
            <p class="sub-headline">Professioanl History</p>
            <ul class="paragraph">
              <li>
                <p>April 2020 - <span class="fontweight-bold">present</span></p>
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
                </p>
              </li>
              <li>
                <p>April 2019 - March 2019</p>
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
          <!-- <div class="skills">
            <p class="sub-headline">Skills</p>
            <ul>
              <li></li>
            </ul>
          </div> -->
          <div class="main-item github">
            <p class="sub-headline">GitHub Account</p>
            <p class="paragraph">
              <external-link link="https://github.com/Sharkkii" class="display-inline color-main">
                <template v-slot:link>
                  Sharkkii
                </template>
              </external-link>
            </p>
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
import IndexTemplate from "../../components/templates/IndexTemplate"
import ExternalLink from "../../components/atoms/ExternalLink"
import JustifiedText from "../../components/atoms/JustifiedText.vue"
export default {
  name: "about-me-page",
  components: {
    IndexTemplate, ExternalLink, JustifiedText
  }
}
</script>