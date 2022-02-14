<template>
<div id="study-page">
  <index-template>
    
    <template v-slot:the-header>
      <div class="header-item">
        <div class="header-text">
          <p>STUDY</p>
        </div>
      </div>
    </template>

    <template v-slot:the-main>
      <div>
        
        <p class="headline">
          Tech Blog
        </p>

        <external-link link="https://qiita.com/Sharkkii">
          <template v-slot:link>
            <div class="main-item qiita">
              <p class="sub-headline">Qiita</p>
              <ul class="paragraph">
                <li>
                  <p>Linear Algebra</p>
                </li>
                <li>
                  <p>Machine Learning</p>
                </li>
              </ul>
            </div>
          </template>
        </external-link>

        <external-link link="https://github.com/Sharkkii/Archive">
          <template v-slot:link>
            <div class="main-item github">
              <p class="sub-headline">GitHub (Implementation of Tech Blog)</p>
              <ul class="paragraph">
                <li>
                  <p>Linear Algebra</p>
                </li>
                <li>
                  <p>Machine Learning</p>
                </li>
              </ul>
            </div>
          </template>
        </external-link>

      </div>
      
    </template>
  </index-template>
</div>
</template>

<style lang="scss" scoped>
#study-page {

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
      text-indent: 25px;
    }

  }

  .main-item {

    border-left: solid 20px $main-color;
    border-right: solid 1px $main-color;
    box-sizing: border-box;
    margin-bottom: 50px;
    padding: 20px;

    color: $main-color;

    .sub-headline {
      font-size: $fontsize-large;
      font-weight: $fontweight-bold;
      line-height: $lineheight-large;
    }

    .paragraph {
      font-size: $fontsize-medium;
      font-weight: $fontweight-normal;
      line-height: $lineheight-medium;
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
export default {
  name: "study-page",
  components: {
    IndexTemplate, ExternalLink
  }
}
</script>