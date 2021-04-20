import VueRouter from "vue-router"

import IndexPage from "../views/pages/IndexPage.vue"
import AboutMePage from "../views/pages/AboutMePage.vue"
import DevelopmentPage from "../views/pages/DevelopmentPage.vue"
import ResearchPage from "../views/pages/ResearchPage.vue"
import NotFoundPage from "../views/pages/NotFoundPage.vue"

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: IndexPage
    },
    {
      path: "/about-me",
      component: AboutMePage
    },
    {
      path: "/development",
      component: DevelopmentPage
    },
    {
      path: "/research",
      component: ResearchPage
    },
    {
      path: "/not-found",
      component: NotFoundPage
    },
    {
      path: "*",
      redirect: "/not-found"
    }
  ]
})

// NOTE: export default { router } does not work ...
export default router