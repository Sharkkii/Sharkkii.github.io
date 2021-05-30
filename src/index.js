import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router/router.js"
import App from "./App"

// add SCSS
require("./assets/css/index.scss")
require("./assets/css/common.scss")

// add font-awesome icons
import { library } from "@fortawesome/fontawesome-svg-core"
import { faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook)

// add font-awesome component to global space
Vue.component("font-awesome-icon", FontAwesomeIcon)

// use router
Vue.use(VueRouter)

const app = new Vue({
  router,
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
})
