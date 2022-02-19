import { createApp } from "vue"
import router from "./router/router.js"

require("@/assets/css/index.scss")
require("@/assets/css/common.scss")
import { delay, breakpoint } from "@/assets/js/const.js"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook, faBriefcase, faLaptopCode, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(faShip, faBars, faTools, faCopyright, faGraduationCap, faCogs, faBook, faBriefcase, faLaptopCode, faSpinner)

import App from "./App"
import ExpandDiv from "@/components/atoms/ExpandDiv"
import { MediaQueryMixin } from "@/assets/js/mixin"

const app = createApp(App)
app.component("fa", FontAwesomeIcon)
app.component("expand-div", ExpandDiv)
app.use(router)
app.mixin(MediaQueryMixin)

app.config.globalProperties.$delay = delay
app.config.globalProperties.$breakpoint = breakpoint

app.mount("#app")