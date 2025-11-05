import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../pages/home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
})

export default router