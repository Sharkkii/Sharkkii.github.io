import VueRouter from "vue-router"

import IndexPage from "../views/pages/production/index/IndexPage.vue"
import AboutMePage from "../views/pages/AboutMePage"
import DevelopmentPage from "../views/pages/DevelopmentPage"
import ResearchPage from "../views/pages/ResearchPage"
import CareerPage from "../views/pages/CareerPage"
import StudyPage from "../views/pages/StudyPage"
import NotFoundPage from "../views/pages/NotFoundPage"

const routes = [
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
    path: "/career",
    component: CareerPage
  },
  {
    path: "/study",
    component: StudyPage
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

const router = new VueRouter({
  routes: routes
})

// NOTE: export default { router } does not work ...
export default router