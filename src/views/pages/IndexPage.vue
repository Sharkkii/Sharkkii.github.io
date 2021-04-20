<template>
<div>
  <the-header/>
  <the-logo/>
  <the-menu/>
  <p>Hello world! from index_page.vue</p>
  <!-- <router-link to="/">Top</router-link> -->
  <router-link to="/development">Development</router-link>
  <router-link to="/research">Research</router-link>
  <router-link to="/about-me">About me</router-link>
  <!-- <the-main/> -->
  <the-footer/>
</div>
</template>

<script>
import TheHeader from "../../components/organisms/TheHeader"
// import TheMain from "../../components/organisms/TheMain"
import TheFooter from "../../components/organisms/TheFooter"
import TheLogo from "../../components/molecules/TheLogo"
import TheMenu from "../../components/molecules/TheMenu"
export default {
  name: "index-page",
  components: {
    TheHeader, TheFooter, TheLogo, TheMenu
  }
}
</script>