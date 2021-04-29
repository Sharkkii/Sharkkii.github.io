<template>
<div id="the-footer">
  <the-footer-container>
    <template v-slot:the-footer-container>
      <the-copyright/>
    </template>
  </the-footer-container>
</div>
</template>

<style lang="scss">
#the-footer {

  #the-copyright {
    position: absolute;
    bottom: 0;
    left: 0;

    height: 50px;
    padding: 0 auto;
    width: 100%;

    line-height: 50px;
    text-align: center;
  }
  
}
</style>

<script>
import TheCopyright from "../molecules/TheCopyright"
import TheFooterContainer from "./TheFooterContainer"
export default {
  name: "the-footer",
  components: {
    TheCopyright, TheFooterContainer
  }
}
</script>