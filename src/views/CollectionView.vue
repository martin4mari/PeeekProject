<script setup>
import UserProfile from "../components/UserProfile.vue";
import { ref } from "vue";

const items = ref([
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi1.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi2.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi3.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi4.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi5.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi6.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi7.png",
  },
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi8.png",
  },
]);
</script>

<template>
  <user-profile></user-profile>

  <section class="lg:px-24 flex flex-col justify-center dark:dark text-center box-border">
    <p class="text-xs font-thin lg:text-left pt-5">COLLECTION</p>

    <h2 class="mb-10 text-3xl font-black text-center lg:text-left">Yummi Universe</h2>

    <div
      class="grid m-4 gap-2 lg:gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center"
    >
      <div :key="index" v-for="(item, index) in items" class="">
        <router-link :to="'/about/' + (index + 1)">
          <div class="flex flex-col justify-between">
            <div class="overflow-hidden rounded-lg">
              <img
                v-bind:src="item.img"
                :alt="item.title"
                class="hover:scale-110 duration-1000 min-w-full"
              />
            </div>

            <!-- <h3 class="text-md font-black my-4 ">
              {{ item.title }}
            </h3> -->
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
