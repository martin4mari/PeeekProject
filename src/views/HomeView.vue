<script>
/* 
-----script setup-----

const collections = [
  {
    title: "Yummi Universe",
    img: "@/components/images/yummi2.png",
  }, 
];
*/

</script>

<template>
  <section class="flex flex-col justify-center mx-24 my-10">
    <div class="grid grid-cols-4 gap-3 sm:grid-cols-1">

      <!-- 
        <div :key="index" v-for="(collection,index) in collections">
        <RouterLink to="/about/">
          <div class="flex flex-col justify-between">
            <img
              :src="collection.img"
              :alt="`${collection.title}`"
              class="self-center w-44"
            />
            <h3 class="text-lg font-bold py-4 text-center">
              {{ collection.title }}
            </h3>
          </div>
        </RouterLink>
      </div>
      -->

      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/Claymate.png"
            alt=""
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Claymate</h3>
        </div>
      </RouterLink>

      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi2.png"
            alt="Yummi Universe"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Yummi Universe</h3>
        </div>
      </RouterLink>
      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/AdaBlocks.png"
            alt="Ada Blocks"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Ada Blocks</h3>
        </div>
      </RouterLink>

      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/ShitCoins.png"
            alt="Shit Coins"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Shit Coins</h3>
        </div>
      </RouterLink>

      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/RangingPets.png"
            alt="Ranging Pets"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Ranging Pets</h3>
        </div>
      </RouterLink>
      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/spacebud.png"
            alt="Space Bud"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Space Bud</h3>
        </div>
      </RouterLink>
      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/cyclr.png"
            alt="Cyclr"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">:Cyclr</h3>
        </div>
      </RouterLink>
      <RouterLink to="/about/">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/collect/Unsig.png"
            alt="Unsig"
            class="self-center w-44"
          />
          <h3 class="text-lg font-bold py-4 text-center">Unsig</h3>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-family: "Space Grotesk", "sans-serif";
}
</style>
