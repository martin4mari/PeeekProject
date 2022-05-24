import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //peeek.me
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      //customizing profile 
      path: "/setup",
      name: "setup",
      component: () => import("../views/SetupProfile.vue"),
    },
    {
      //---check on userName using route params---   peeek.me/sampo
      path: "/user",
      name: "collectionList",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/about",
      name: "collection",
      component: () => import("../views/CollectionView.vue"),
    },
    {
      //---check on getting cardDetails by id using route params---
      path: "/about/:id",
      name: "item",
      component: () => import("../views/AboutView.vue"),
    },
   
    
  ],
});

export default router;
