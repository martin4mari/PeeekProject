<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header flex flex-row justify-around">
    <RouterLink to="/"
      ><img
        src="@/components/icons/peeekEye.svg"
        class="w-16 h-8"
        alt="peeek-logo"
    /></RouterLink>
    <img src=@/components/icons/Vector.svg class="h-3 w-3 my-2 hover:opacity-70"
    alt="settings">
  </header>
  <main>
    <div class="m-5 flex flex-col items-center">
      <img src="./components/icons/img.png" class="w-13 h-13" alt="avatar" />
      <h2 class="p-2 text-2xl font-semibold">Sampo</h2>
      <p class="p-2">
        chaotic good — chain agnostic <br />
        building a universe → @FortGotten
      </p>
      <nav
        class="
          w-14
          h-6
          flex flex-row
          border-solid border-2 border-black
          rounded-full
          justify-around
        "
      >
        <ul class="divide-x divide-black flex flex-row">
          <li class="p-1">
            <a href="#">
              <img
                src="./components/icons/Twitter.svg"
                class="w-3 h-2.5 hover:opacity-90"
                alt=""
              />
            </a>
          </li>
          <li class="p-1">
            <a href=""
              ><img
                src="./components/icons/Instagram.svg"
                class="w-3 h-2.5 hover:opacity-90"
                alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </main>

  <RouterView />

  <footer>
    <div class="w-full h-20 py-8 bg-black text-white flex justify-around">
      <!------  set to match with header s peeek  -->
      <img
        src="./components/icons/eyes.svg"
        class="h-5 w-5 mx-10 hover:scale-105"
        alt=""
      />

      <div class="flex">
        <img
          src="./components/icons/image 1.svg"
          class="h-4 w-4 hover:opacity-70"
          alt="twitter"
        />
        <img
          src="./components/icons/image 2.svg"
          class="h-4 w-4 mx-3 hover:opacity-70"
          alt="discord"
        />
        <ul class="mx-2 flex text-xs">
          <li class="mx-2">Terms and conditions</li>
          <li class="mx-2">Privacy Notice</li>
          <li class="mx-2">Service Agreement</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Work+Sans&display=swap");
main {
  font-family: "Manrope", sans-serif;
}
</style>
