<script setup>
import UserProfile from "../components/UserProfile.vue"
import { ref } from "vue";


const items = ref([
  {
    title: "Yummi 002",
    img: "/src/components/images/yummi1.png",
  },
   {
    title: "Yummi 002",
    img: "/src/components/images/yummi2.png",
  },{
    title: "Yummi 002",
    img: "/src/components/images/yummi3.png",
  },
   {
    title: "Yummi 002",
    img: "/src/components/images/yummi4.png",
  },{
    title: "Yummi 002",
    img: "/src/components/images/yummi5.png",
  },
   {
    title: "Yummi 002",
    img: "/src/components/images/yummi6.png",
  },{
    title: "Yummi 002",
    img: "/src/components/images/yummi7.png",
  },
   {
    title: "Yummi 002",
    img: "/src/components/images/yummi8.png",
  },]
); 
</script>

<template>
<user-profile></user-profile>

  <section class="flex flex-col justify-center dark:bg-slate-900 dark:text-slate-100">

    <h2 class="mx-24 my-10 text-3xl font-black text-center lg:text-left">
      Yummi Universe
    </h2>

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:mx-24">
      <div :key="index" v-for="(item, index) in items" class="hover:scale-110 duration-300">        
        <router-link :to="'/about/' + (index+1)">
          <div class="flex flex-col justify-between">
            <img
              v-bind:src="item.img"
              :alt="item.title"
              class="self-center "
            />
            <h3 class="text-md font-black py-4 text-center">
              {{ item.title }}
            </h3>
          </div>
        </router-link>
      </div>

    </div>

  </section>
</template>
