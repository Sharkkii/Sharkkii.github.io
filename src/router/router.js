import VueRouter from "vue-router"

import RootPage from "../views/pages/RootPage"
import AboutMePage from "../views/pages/AboutMePage"
import DevelopmentPage from "../views/pages/DevelopmentPage"
import ResearchPage from "../views/pages/ResearchPage"
import StudyPage from "../views/pages/StudyPage"
import NotFoundPage from "../views/pages/NotFoundPage"
import UnderConstructionPage from "../views/pages/UnderConstructionPage"

import { add_alias } from "../assets/js/website_tree"

const routes = [
  {
    path: "/under-construction",
    component: UnderConstructionPage
  },
  {
    path: "/not-found",
    component: NotFoundPage
  },
  {
    path: "/",
    component: RootPage
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
    path: "/study",
    component: StudyPage
  },
  {
    path: "*",
    redirect: "/not-found"
  }
]

add_alias(routes)

const router = new VueRouter({
  routes: routes
})

// NOTE: export default { router } does not work ...
export default router