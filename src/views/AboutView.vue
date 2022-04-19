<script setup>
const item = {
  collection: "Yummi Universe",
  title: "Yummi 002",
  description:
    "A female led NFT project ready to drop a collection of cute, colourful, and otherworldly CNFTs and build a inclusive, art based community.",
};
</script>


<template>
  <div class="flex justify-center">
    <div
      class="
        m-10
        grid grid-cols-1
        w-2/3
        justify-self-center
        rounded-2xl
        bg-white
        md:grid-cols-2
        lg:grid-cols-2
      "
    >
      <img
        src="../components/images/yummi2.png"
        class="w-full rounded-l-2xl"
        :alt="`${item.title}`"
      />
      <div class="py-5 pl-10 my-5">
        <div class="flex">
          <h2>{{ item.collection }}</h2>
          <img
            src="../components/icons/ver.svg"
            class="mx-2 h-5 w-auto"
            alt="verified-icon"
          />
        </div>
        <h3 class="text-4xl font-black">{{ item.title }}</h3>
        <p class="pt-10 pb-5 pr-5 font-black">
          {{ item.description }}
        </p>
        <div>
          <button
            class="
              my-2
              w-8
              h-8
              text-sm text-center
              font-black
              bg-stone-300
              rounded-full
            "
          >
            A
          </button>
          <button
            class="
              mx-2
              my-2
              w-8
              h-8
              text-sm text-center
              font-black
              bg-stone-300
              rounded-full
            "
          >
            B
          </button>
          <button
            class="
              my-2
              w-40
              h-8
              text-sm text-center
              font-semibold
              bg-stone-300
              rounded-full
            "
          >
            Send and Offer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
