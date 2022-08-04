<template>
  <footer
    class="w-full dark:dark light flex items-center flex-col justify-end bg-cover pt-5 lg:pt-20 mt-5 lg:mt-20"
  >
    <div
      class="absolute h-full w-full bg-gradient-to-t dark:from-zinc-900 to-transparent from-zinc-100"
    ></div>
    <div
      class="z-20 flex justify-between w-4/5 px-5 m-5 dark:dark light lg:p-10 p-4 lg:mb-20"
    >
      <img
        src="../components/icons/eyes.svg"
        class="h-9 w-9 mx-5 hover:scale-105"
        alt="peeek-logo"
      />

      <div class="flex flex-col">
        <span class="font-bold text-sm lg:text-lg">FORT GOTTEN</span>
        <p class="text-[0.7rem] lg:text-xs opacity-70">
          Brought to you by the Fort Gotten Team 🌲
        </p>
      </div>
    </div>
    <!-- 
    <div class="w-full opacity-40">
      <img src="../components/images/nftfooter2.png" alt="" />
    </div> -->

    <!-- <div class="dark:dark light w-full button-0 absolute h-32"></div> -->
  </footer>
</template>

<style>
footer {
  background-image: url("../components/images/nftfooter2.png");
  background-position: bottom;
}
</style>
