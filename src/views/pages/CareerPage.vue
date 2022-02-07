<template>
<div id="career-page">
  <index-template>
    
    <template v-slot:the-header>
      <div class="header-item">
        <div class="header-text">
          <p>CAREER</p>
        </div>
      </div>
    </template>

    <template v-slot:the-main>
      <div>
        <p class="headline">
          Professional Experience
        </p>

        <div class="main-item PFN">

          <p class="sub-headline">Summer Internship 2021 @ Preferred Networks (PFN)</p>
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

          <p class="sub-headline">Part-time Employee @ Preferred Networks (PFN)</p>
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

          <p class="sub-headline">Lecturer of Global Consumer Intelligence (GCI) @ Matsuo Lab.</p>
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
</template>

<style lang="scss" scoped>
#career-page {

  .headline {
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

    border-left: solid 20px $main-color;
    border-right: solid 1px $main-color;
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
  name: "Development-page",
  components: {
    IndexTemplate, ExternalLink
  }
}
</script>