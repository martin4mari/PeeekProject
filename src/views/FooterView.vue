<template>
  <footer
    class="    
      dark:from-slate-900
      w-full
      h-screen

      flex
      items-center
      flex-col
      justify-end
      overflow-hidden 
    "
  >
    <div
      class="absolute z-20 bottom-32  py-6
        flex
        dark:bg-slate-900 dark:text-white
        w-5/6
        justify-between
        px-5
        mx-5
        bg-slate-100
      "
    >
      <img
        src="../components/icons/eyes.svg"
        class="h-9 w-9 mx-5 hover:scale-105"
        alt="peeek-logo"
      />

      <div class="flex flex-col">
        <span class="font-bold text-lg">FORT GOTTEN</span>
        <p class="text-xs opacity-70">
          Brought to you by the Fort Gotten Team 🌲
        </p>
      </div>
    </div>
    <div class="w-screen h-full bg-gradient-to-t dark:from-slate-900 from-slate-100"></div>
    <div class="w-screen h-40 bg-slate-100 dark:bg-slate-900">

    </div>

    <div class="w-full -z-10 absolute bottom-0 bg-slate-100 dark:bg-slate-900 h-screen">
      <img src="../components/images/nftfooter.png" alt="" />
    </div>
  </footer>
</template>


<style scoped>
</style>