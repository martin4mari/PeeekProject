<script setup>
import UserProfile from "../components/UserProfile.vue";
import { ref } from "vue";

const item = ref({
  img: "/src/components/images/yummi5.png",
  collection: "Yummi Universe",
  title: "Naru 01154",
  description:
    "A female led NFT project ready to drop a collection of cute, colourful, and otherworldly CNFTs and build a inclusive, art based community. Yummi aims to follow in the footsteps of projects like Pokemon, Digimon & Moshi Monsters. Together with the Hungrynaru team we are building a Universe of Yummi Creatures.",
});
</script>

<template>
  <user-profile></user-profile>
  <div class="flex justify-center dark:dark light">
    <div
      class="grid grid-cols-1 justify-self-center rounded-2xl m-4 md:grid-cols-2 lg:grid-cols-2 lg:w-3/5"
    >
      <img
        :src="'/src/components/images/yummi' + `${$route.params.id}` + '.png'"
        class="w-full"
        :alt="`${item.title}`"
      />
      <div class="py-5">
        <div class="flex pt-2 justify-center">
          <h2 class="self-center">{{ item.collection }}</h2>
          {{ p }}
          <img
            src="../components/icons/ver.svg"
            class="mx-2 h-5 w-auto dark:invert"
            alt="verified-icon"
          />
        </div>
        <h3 class="text-3xl pb-2 font-semibold text-center">
          {{ item.title }}
        </h3>
        <p class="pt-2 mx-5 text-sm">
          {{ item.description }}
        </p>

        <!--         
        <div class="dark:text-slate-900">
          <button
            class="my-2 w-8 h-8 text-sm text-center font-black bg-stone-300 rounded-full"
          >
            A
          </button>
          <button
            class="mx-2 my-2 w-8 h-8 text-sm text-center font-black bg-stone-300 rounded-full"
          >
            B
          </button>
          <button
            class="my-2 w-40 h-8 text-sm text-center font-semibold bg-stone-300 rounded-full"
          >
            Send and Offer
          </button> 
        </div>
      --></div>
    </div>
  </div>
</template>
