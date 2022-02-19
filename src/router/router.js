import { createRouter, createWebHistory } from "vue-router"

import { delay } from "@/assets/js/const"
import IndexPage from "@/views/pages/production/index/IndexPage.vue"
import AboutMePage from "@/views/pages/production/about-me/AboutMePage"
import DevelopmentPage from "@/views/pages/production/development/DevelopmentPage"
import ResearchPage from "@/views/pages/production/research/ResearchPage"
import CareerPage from "@/views/pages/production/career/CareerPage"
import StudyPage from "@/views/pages/develop/study/StudyPage"
import NotFoundPage from "@/views/pages/develop/not-found/NotFoundPage"

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
  // {
  //   path: "*",
  //   redirect: "/not-found"
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(function (to, from, next) {
  setTimeout(next, delay * 2.0)
})

export default router