<template>
<div>
  <my-header/>
  <my-icon/>
  <my-menu/>
  <p>Hello world! from index_page.vue</p>
  <!-- <router-link to="/">Top</router-link> -->
  <router-link to="/development">Development</router-link>
  <router-link to="/research">Research</router-link>
  <router-link to="/about-me">About me</router-link>
  <my-main/>
  <my-footer/>
</div>
</template>

<script>
import MyHeader from "../../components/organisms/header_organism"
import MyMain from "../../components/organisms/main_organism"
import MyFooter from "../../components/organisms/footer_organism"
import MyIcon from "../../components/organisms/icon_organism"
import MyMenu from "../../components/organisms/menu_organism"
export default {
  name: "index-page",
  components: { MyHeader, MyMain, MyFooter, MyIcon, MyMenu }
}
</script>