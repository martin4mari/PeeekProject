<script setup>
import { ref } from "@vue/reactivity";

const themes = ref([
  {
    backgroundColor: "#fff",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#54asc5",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#54asc5",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#43a",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#f04453",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#acb540",
    themeColor: "",
    fontStyle: "",
  },
  {
    backgroundColor: "#F24C00",
    themeColor: "",
    fontStyle: "",
  },
]);
</script>

<template>
  <section class="m-40 flex flex-col p-5 text-left w-2/5">
    <h1 class="m-2 text-md font-semibold mb-2">Theme options</h1>

    <div class="m-2 orverflow-hidden">
      <h1 class="text-xs mb-2">HEADER</h1>
      <input
        type="file"
        name=""
        id=""
        class="file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-zinc-50 file:text-blue-500 hover:file:white"
      />
    </div>

    <div class="m-2">
      <h1 class="text-xs mb-2">THEME COLOR</h1>
      <div class="flex">
        <div
          v-for="(c, index) in themes"
          :key="index"
          class="rounded-full w-6 h-6 m-1"
          :style="themes"
        ></div>
      </div>
    </div>

    <div class="m-2">
      <h1 class="text-xs mb-2">BACKGROUND COLOR</h1>
      <div class="flex">
        <div
          v-for="(c, index) in themes"
          :key="index"
          class="rounded-full w-6 h-6 m-1"
          :style="themes"
        ></div>
      </div>
    </div>

    <div class="m-2">
      <h1 class="text-xs mb-2">FONT STYLE</h1>
      <select name="" id="" class="dark:bg-zinc-900 outline-none">
        <option value="" selected>Basic</option>
        <option value="">Arial</option>
        <option value="">Calibri</option>
        <option value="">Helvetica</option>
        <option value="">Roboto</option>
      </select>
    </div>
  </section>
</template>
