import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router/router.js"
import App from "./App"

require("./assets/css/index.scss")
require("./assets/css/common.scss")

import { library } from "@fortawesome/fontawesome-svg-core"
import { faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook, faBriefcase, faLaptopCode, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook, faBriefcase, faLaptopCode, faSpinner)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.use(VueRouter)

const app = new Vue({
  router,
  el: "#app",
  components: {
    App
  },
  template: "<App/>"
})
