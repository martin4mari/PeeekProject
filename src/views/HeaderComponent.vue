<template>
  <header class="header w-full ">
    <div class="flex flex-row justify-between w-11/12 h-14 ">
      <router-link to="/"
        ><img
          src="@/components/icons/Peek.svg"
          class="w-20 pt-4 dark:invert mx-5"
          alt="peeek-logo"
        />
      </router-link>

      <nav class="hidden lg:inline text-xs items-center text-center mt-4">
          <ul class="flex flex-col md:flex-row lg:flex-row ">
            <router-link to="/about">
              <li :class="this.$route.path ==='/about'? 'text-blue-600': 'text-slate-900 dark:text-slate-100'" class="font-bold hover:scale-105 duration-300 p-1">About</li>
            </router-link>
            <router-link to="/wallet"> 
              <li :class="this.$route.path ==='/wallet'? 'text-blue-600': 'text-slate-900 dark:text-slate-100'" class="font-bold px-4 hover:scale-105 duration-300 p-1">
                My Wallet
              </li>
            </router-link>
            <router-link to="/user"
              ><li class="font-bold text-blue-600 hover:scale-105 duration-300 p-1">
                💬Share $Sampos Wallet
              </li></router-link
            >

            <button
              class="
                rounded-md
                outline outline-[0.1rem] outline-slate-500/70
                dark:bg-slate-800
                bg-slate-300/70
                mx-3 text-slate-500 p-1
              "
            >
              Address/$handle...
            </button>
          </ul>
      </nav>

      <!-- menu button -->
      <div class="lg:hidden m-2 pt-1" @click="ok()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            w-10
            h-10
            stroke-slate-900
            fill-slate-900
            dark:fill-slate-100 dark:stroke-slate-100
          "
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </div>

    </div> 
  </header> 

  <!-- <dark-mode :dark="dark" @on-change="dark = $event">{{dark}}</dark-mode> -->
</template>

 <script setup>
import { ref } from "@vue/reactivity";

const dark = ref(true);

function ok() {
  dark.value = !dark.value;
}


</script> 

<style scoped>
.peeek {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>


