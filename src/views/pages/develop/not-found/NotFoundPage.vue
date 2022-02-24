<template>
<div id="not-found-page">
  <div class="page">
  
    <index-template v-bind:flag="flag">
      <template v-slot:the-main>
        
        <div class="item">
          <p>
            Sorry, the requested URL was not found on this website :(
          </p>
          <p>
            You may find what you're looking for on
            <internal-link v-bind:link="'/'" class="display-inline color-main">
              <template v-slot:link>
                HOME PAGE
              </template>
            </internal-link>
            ......
          </p>
        </div>
        
      </template>
    </index-template>
    
  </div>
</div>
</template>

<style scoped lang="scss">
#not-found-page {
  .item {
    font-size: $fontsize-large;
    line-height: calc(#{$fontsize-large} * 2.0);
  }
}
</style>

<script>
import InternalLink from '@/components/atoms/InternalLink.vue'
import IndexTemplate from "@/components/templates/IndexTemplate"
import CenterizedText from '@/components/atoms/CenterizedText.vue'
export default {
  name: "not-found-page",
  components: {
    IndexTemplate, InternalLink, CenterizedText
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