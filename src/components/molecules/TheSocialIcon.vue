<template>
<div id="the-social-icon">
  <div class="flex-container">

    <div class="flex-item">

      <external-link link="https://github.com/Sharkkii" class="display-inline color-main">
        <template v-slot:link>

          <div class="inner-flex-container">
            <div class="inner-flex-item img">
              <img v-bind:src="GitHubIcon" v-bind:width="iconWidth" v-bind:height="iconHeight"/>
            </div>
            <div class="inner-flex-item text" v-if="isPc">
              <p>GitHub</p>
            </div>
          </div>

        </template>
      </external-link>

    </div>

    <div class="flex-item">

      <external-link link="https://twitter.com/Toshiki_Kodera" class="display-inline color-main">
        <template v-slot:link>

          <div class="inner-flex-container">
            <div class="inner-flex-item img">
              <img v-bind:src="TwitterIcon" v-bind:width="iconWidth" v-bind:height="iconHeight"/>
            </div>
            <div class="inner-flex-item text" v-if="isPc">
              <p>Twitter</p>
            </div>
          </div>

        </template>
      </external-link>

    </div>

  </div>
</div>
</template>

<style lang="scss" scoped>
#the-social-icon {

  width: 100%;
  height: 100%;

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .flex-item {
    width: 50%;
    height: 100%;
    border: solid 0.1vw $main-color-80;
    box-sizing: border-box;
    transition-property: background-color;
    transition-duration: 1s;
    background-color: $white;
    &:hover {
      background-color: $main-color-20;
    }
  }

  .inner-flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .inner-flex-item {
    &.text {
      font-size: $fontsize-medium;
      color: $main-color-80;
      line-height: v-bind(lineHeight);
    }
    &.img {
      img {
        display: inline-block;
        background: #fff;
        border-radius: 50%;
      }
    }
  }
  
}
</style>

<script>
import TwitterIcon from "@/assets/img/twitter.png"
import GitHubIcon from "@/assets/img/github.png"
import ExternalLink from "@/components/atoms/ExternalLink.vue"
export default {
  name: "the-social-icon",
  components: {
    ExternalLink
  },
  data: function() {
    return {
      TwitterIcon, GitHubIcon
    }
  },
  computed: {
    iconWidth: function() {
      if (this.width > 2 * this.height) {
        return this.height * 0.60;
      } else {
        return this.width * 0.30;
      }
    },
    iconHeight: function() {
      if (this.width > 2 * this.height) {
        return this.height * 0.60;
      } else {
        return this.width * 0.30;
      }
    },
    lineHeight: function() {
      return this.height + "px";
    }
  },
  props: {
    width: {
      type: Number,
      require: true
    },
    height: {
      type: Number,
      require: true
    }
  }
}
</script>