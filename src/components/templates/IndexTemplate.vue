<template>
<div id="index-template">
  <transition>
    <div class="page" v-if="flag">
      <the-header>
        <template v-slot:the-header>
          <slot name="the-header"></slot>
        </template>
      </the-header>
      <the-main>
        <template v-slot:the-main>
          <slot name="the-main">No Content</slot>
        </template>
      </the-main>
      <the-footer/>
    </div>
  </transition>
</div>
</template>

<style lang="scss" scoped>
#index-template {

  .page {

  }

  .v-enter-active, .v-leave-active {
    transition: opacity $delay;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1
  }

}
</style>

<script>
import TheHeader from "../organisms/TheHeader"
import TheMain from "../organisms/TheMain"
import TheFooter from "../organisms/TheFooter"
export default {
  name: "index-template",
  components: {
    TheHeader, TheMain, TheFooter
  },
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  }
}
</script>