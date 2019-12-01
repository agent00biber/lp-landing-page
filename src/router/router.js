import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/intro",
      name: "intro",
      component: () => import("@/views/Intro.vue")
    },
    {
      path: "/frontend",
      name: "frontend",
      component: () => import("@/views/Frontend.vue")
    },
    {
      path: "/design",
      name: "design",
      component: () => import("@/views/Design.vue")
    },
    {
      path: "/marketing",
      name: "marketing",
      component: () => import("@/views/Marketing.vue")
    },
    {
      path: "/science",
      name: "science",
      component: () => import("@/views/Science.vue")
    },
    {
      path: "/teamwork",
      name: "teamwork",
      component: () => import("@/views/Teamwork.vue")
    },
    {
      path: "/learning",
      name: "learning",
      component: () => import("@/views/Learning.vue")
    },
    {
      path: "/legal",
      name: "legal",
      component: () => import("@/views/Legal.vue")
    },
    {
      path: "/outro",
      name: "outro",
      redirect: { name: "home", hash: "#outro" }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 0 } };
    }
    return { x: 0, y: 0 };
  }
});
