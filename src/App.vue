<script setup>
import { RouterView } from "vue-router";
import HeaderView from "@/views/Header.vue";
import FooterView from "@/views/FooterView.vue";
</script>

<template>
  <header-view></header-view>
  <RouterView />
  <footer-view></footer-view>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Space+Grotesk:wght@700&family=Work+Sans&display=swap");
main {
  font-family: "Manrope", sans-serif;
}
</style>
