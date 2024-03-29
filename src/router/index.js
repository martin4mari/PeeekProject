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
      //profile img
      path: "/setup/profile",
      name: "profile",
      component: () => import("../views/ProfileImg.vue"),
    },
    {
      //username
      path: "/setup/username",
      name: "username",
      component: () => import("../views/SetupUsername.vue"),
    },
    {
      //setup bio
      path: "/setup/bio",
      name: "bio",
      component: () => import("../views/SetupBio.vue"),
    },
    {
      //socials
      path: "/setup/socials",
      name: "socials",
      component: () => import("../views/SetupSocials.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/ConnectWallet.vue"),
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
    }, {
      path: "/wallet",
      name: "walletSection",
      component: () => import("../views/WalletSection.vue"),
    },


  ],
});

export default router;
