<template>
  <div class="flex flex-col items-center p-20 pt-24 h-screen dark:bg-slate-900 text-center bg-slate-100">
    <h4 class="text-3xl font-bold text-blue-500 p-1">Hello 👋</h4>
    <p class="text-3xl font-bold text-slate-700 w-2/5 mb-5 p-1 dark:text-slate-300">
      Peek into any Cardano Wallet’s NFTs (and share it).
    </p>

    <div class="flex justify-center w-2/3 h-10">
      <div
        class="rounded-lg bg-slate-200 flex w-64 justify-between items-center dark:bg-slate-700"
      >
        <input
          class="
            outline-none
            text-slate-500/60
            bg-slate-200
            text-xs text-center
            dark:bg-slate-700
          "
          placeholder="Address or $Handle..."
        />

        <button
          class="
            font-bold
            bg-blue-500
            text-slate-100 text-white
            rounded-lg
            px-2
            p-2
            h-10
          "
        >
          Peeek
        </button>
      </div>

      <p class="font-bold text-md m-2 text-slate-700 dark:text-slate-300">or</p>

      <button  class=" text-xs
            bg-blue-500
            text-slate-100 text-white
            rounded-lg
            px-2
            p-2
          ">Peek My Wallet</button>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap");

* {
  font-family: "Sora", "sans-serif";
}
</style>

