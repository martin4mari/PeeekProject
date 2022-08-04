<template>
  <section class="dark:dark light overflow-hidden">
    <div class="w-screen flex overflow-hidden flex-col lg:flex-row">
      <div class="flex flex-col lg:m-20 p-5">
        <img src="../components/icons/eyes.svg" alt="" class="w-8 h-8 my-5" />

        <h2 class="text-4xl lg:text-5xl">Showcase your NFTs how you want to.</h2>
        <p class="text-sm py-2 lg:py-5">
          Peeek inside your wallet and get a glance at your NFTs any where you are. Make
          collections, select what you want to show and add it to your social media.
        </p>
        <router-link to="/login">
          <walletButton></walletButton>
        </router-link>
      </div>

      <div>
        <div
          class="absolute z-20 left-0 lg:bg-gradient-to-r bg-gradient-to-b from-zinc-100 dark:from-zinc-900 h-full lg:w-1/2 w-full"
        ></div>
        <img src="../components/images/nftheader.png" alt="" class="" />
      </div>
    </div>
  </section>

  <section id="about" class="py-2 lg:py-24 dark:dark light">
    <div class="text-center flex flex-col items-center">
      <h3 class="font-extrabold text-3xl">
        Organize your NFT Collections however you want to show them.
      </h3>
      <p class="text-sm py-10 w-2/3 text-center">
        It is not just about collecting, but how you display your collections. Now, you
        let others peek at your collection however you want them to: NFTs from the same
        Creator, Favorite Bluechips, available for trading, junk, etc.
      </p>
      <div class="flex justify-center gap-12 flex-col lg:flex-row">
        <div>
          <img
            src="src/components/images/collect/RangingPets.png"
            alt=""
            class="h-48 w-48 z-20"
          />
          <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
          <img
            src="src/components/images/collect/Claymate.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-6 z-10"
          /><img
            src="src/components/images/collect/unsig.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-12 z-0"
          />
        </div>
        <div>
          <img
            src="src/components/images/collect/Claymate.png"
            alt=""
            class="h-48 w-48 z-20"
          />
          <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
          <img
            src="src/components/images/collect/Claymate.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-6 z-10"
          /><img
            src="src/components/images/collect/unsig.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-12 z-0"
          />
        </div>
        <div>
          <img
            src="src/components/images/collect/unsig.png"
            alt=""
            class="h-48 w-48 z-20"
          />
          <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
          <img
            src="src/components/images/collect/Claymate.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-6 z-10"
          /><img
            src="src/components/images/collect/unsig.png"
            alt=""
            class="h-48 w-48 absolute top-0 rotate-12 z-0"
          />
        </div>
      </div>
    </div>
  </section>

  <section
    class="text-center py-20 flex justify-center flex-col items-center dark:dark light"
  >
    <h3 class="font-extrabold text-3xl w-2/3">A gallery in your pocket</h3>
    <p class="py-5 text-sm w-2/3">
      Show your collection on Desktop & Mobile and feel proud of it. Add it to your social
      media and sit back and relax.
    </p>
    <img src="../components/images/mockup.png" alt="" class="w-4/6 mt-5" />
  </section>

  <section
    class="text-center p-10 flex justify-center flex-col items-center dark:dark light"
  >
    <h3 class="font-extrabold text-3xl">
      Starting with Cardano, but quickly expanding to other blockchains
    </h3>
    <p class="py-10 text-sm text-center w-4/6">
      We want a centralized display for your decentralized collectibles. Gradually, we’ll
      be adding support for Tezos, Ethereum & Solana, because who likes jumping on links
      to show everything.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center py-5">
      <div>
        <img
          src="src/components/images/collect/RangingPets.png"
          alt=""
          class="h-48 w-48 z-20"
        />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
      <div>
        <img src="src/components/images/yummi4.png" alt="" class="h-48 w-48 z-20" />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
      <div>
        <img
          src="src/components/images/collect/AdaBlocks.png"
          alt=""
          class="h-48 w-48 z-20"
        />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
      <div>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 z-20"
        />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
      <div>
        <img
          src="src/components/images/collect/cyclr.png"
          alt=""
          class="h-48 w-48 z-20"
        />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/ShitCoins.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
      <div>
        <img
          src="src/components/images/collect/spacebud.png"
          alt=""
          class="h-48 w-48 z-20"
        />
        <h1 class="text-xs py-10 font-bold">Big Dumb Idiot Ape Club ™</h1>
        <img
          src="src/components/images/collect/Claymate.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-6 z-10"
        /><img
          src="src/components/images/collect/unsig.png"
          alt=""
          class="h-48 w-48 absolute top-0 rotate-12 z-0"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

h2 {
  font-family: "Work Sans", sans-serif;
  font-weight: 900;
}
</style>

<script setup>
import WalletButton from "../components/WalletButton.vue";
</script>
