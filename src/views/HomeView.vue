<template>
  <!-- <section class="text-black dark:bg-zinc-900 dark:text-white"> -->

 <section class="text-black dark:bg-slate-900 dark:text-white"> 
    <div class="w-full p-20 flex flex-col justify-center">
        <img
          src="../components/icons/Peek.svg"
          class="w-24 self-center"
          alt="peeek"
        />
        <p class="pt-2 text-3xl text-center">inside your wallet and get a glance at your NFTs</p>
    </div>

    <div class="w-full">
      <p class="text-center text-lg p-2 mb-10">
        Organize your Collections however you want too see them.
      </p>
      <div class="flex justify-center">
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/RangingPets.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/cyclr.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/spacebud.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
      </div>
    </div>

    <!--connect wallet button-->
    <div class="w-full h-48 flex justify-center">
      <router-link to="/setup">
        <button
          class="
            border-black
            dark:border-white
            active:scale-90
            border-2
            m-10
            rounded-full
            px-6
            py-4
            text-center text-2xl
            flex flex-between
          "
        >
          <img src="../components/icons/eyes.svg" alt="eyes" />
          <span class="p-2">at your wallet</span>
        </button>
      </router-link>
    </div>

    <div class="w-full pb-10">
      <p class="text-center text-lg p-2 mb-10">
        By Creator, by Trait, by Type: you pick what other can PEEEK
      </p>
      <div class="flex justify-center">
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/RangingPets.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/cyclr.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
        <div class="flex flex-col justify-between p-2">
          <img
            src="@/components/images/collect/spacebud.png"
            alt="Yummi Universe"
            class="self-center z-20 w-48"
          />
          <img
            src="@/components/images/collect/rotate/yummi2.png"
            alt=""
            class="top-0 absolute w-48 rotate-6 self-center z-0"
          />
          <h3 class="text-sm font-semibold py-4 text-center">Yummi Universe</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>