import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutUsPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutPage,
    },
    {
      path: "/details/:slug",
      name: "details",
      component: SingleProjectPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };