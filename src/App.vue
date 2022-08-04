<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import DarkTheme from "./components/DarkTheme.vue";

import { ref } from "vue";
const dark = ref(true);

// export default {
//   data() {
//     return {
//       style: { backgroundColor: "", color: "" },
//     };
//   },
//   components: { HeaderComponent, FooterComponent, DarkTheme },
// };
</script>

<template>
  <div :class="dark ? 'dark' : ''" class="min-h-screen box-border">
    <dark-theme @on-change="dark = $event"></dark-theme>
    <header-component></header-component>
    <router-view class="min-h-screen box-border"></router-view>
    <footer-component></footer-component>
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Space+Grotesk:wght@300&family=Work+Sans&display=swap");

main {
  font-family: "Manrope", sans-serif;
}
</style>
