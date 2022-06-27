<script setup>
import { ref } from "vue";

const filter = ref(true);

function filterShow() {
  filter.value = !filter.value;
}
</script>

<template>
  <div class="hidden lg:flex justify-between text-xs m-5">
    <div @click="filterShow()" class="flex opacity-80">
      <button class="w-24">Change button</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        style="fill: #2563eb"
        class="self-center"
      >
        <path
          d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
        ></path>
      </svg>
    </div>

    <div
      v-show="filter === true"
      class="w-full mx-5 items-center flex justify-between opacity-70 border-y-[1px] dark:border-zinc-100/20 py-2"
    >
      <ul class="flex">
        <li
          class="mx-2 hover:text-blue-600 hover:bg-blue-900/20 hover:font-semibold rounded-sm p-1"
        >
          Default
        </li>
        <li
          class="font-thin mx-2 hover:text-blue-600 hover:bg-blue-900/20 hover:font-semibold rounded-sm p-1"
        >
          Favourites
        </li>

        <li
          class="mx-2 hover:text-blue-600 hover:bg-blue-900/20 hover:font-semibold rounded-sm p-1"
        >
          By Policy
        </li>
        <li
          class="mx-2 hover:text-blue-600 hover:bg-blue-900/20 hover:font-semibold rounded-sm p-1"
        >
          Tokens
        </li>

        <li
          class="hover:text-blue-600 hover:bg-blue-900/20 hover:font-semibold rounded-sm p-1"
        >
          View All
        </li>
      </ul>

      <div class="flex px-4 items-center">
        <p class="mx-1">Group Policies</p>
        <input type="checkbox" name="" id="" class="mr-5 input" />

        <select
          name=""
          id=""
          class="rounded-md outline outline-[0.1rem] outline-zinc-500/70 h-6 dark:dark light opacity-70"
        >
          <option value="" selected class="dark:text-zinc-100/70 text-zinc-900/70">
            Sort: A-Z
          </option>
          <option value="" class="dark:text-zinc-100/70 text-zinc-900/70">
            Sort: Z-A
          </option>
        </select>
      </div>
    </div>
    <input
      type="text"
      placeholder="Search.."
      class="rounded-md outline outline-[0.1rem] outline-zinc-500/70 dark:dark light px-1 h-6 m-2 placeholder:opacity-70"
    />
  </div>
</template>
