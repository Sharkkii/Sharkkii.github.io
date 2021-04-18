import VueRouter from "vue-router"

import IndexPage from "../views/pages/index_page.vue"
import AboutMePage from "../views/pages/about_me_page.vue"
import DevelopmentPage from "../views/pages/development_page.vue"
import ResearchPage from "../views/pages/research_page.vue"
import NotFoundPage from "../views/pages/not_found_page.vue"

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