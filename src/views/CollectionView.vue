<script setup>
/*const items = [
  {
    title: "Yummi002",
    img: "@/components/images/yummi2.png",
  },
]; */
</script>

<template>
  <section class="flex flex-col justify-center mx-24 my-10 sm:m-5">
    <h2 class="p-12 text-3xl font-black py-6 text-center lg:text-left">Yummi Universe</h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 ">
      <!--      
      <div :key="index" v-for="(item, index) in items" class="p-2">        
        <RouterLink :to="'/about/' + index">
          <div class="flex flex-col justify-between">
            <img
              :src="item.img"
              :alt="`${item.title}`"
              class="self-center w-44"
            />
            <h3 class="text-md font-black py-4 text-center">
              {{ item.title }}
            </h3>
          </div>
        </RouterLink>
      </div>
          -->

      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi1.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi001</h3>
        </div>
      </RouterLink>

      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi2.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi002</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi3.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi003</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi4.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi004</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi5.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi005</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi6.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi006</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi7.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi007</h3>
        </div>
      </RouterLink>
      <RouterLink :to="'/about/' + 1">
        <div class="flex flex-col justify-between">
          <img
            src="@/components/images/yummi8.png"
            alt="yummi1"
            class="self-center w-44"
          />
          <h3 class="text-md font-black py-4 text-center">Yummi008</h3>
        </div>
      </RouterLink>
      
    </div>
  </section>
</template>