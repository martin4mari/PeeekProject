<script>
export default {
  name: "AboutView",

  data() {
    return {
      collection: "Yummi Universe",
      title: "Yummi 002",
      description:
        "A female led NFT project ready to drop a collection of cute, colourful, and otherworldly CNFTs and build a inclusive, art based community.",
    };
  },
};
</script>
<template>
  <div class="flex justify-center">
    <div
      class="
        card-details
        m-10
        grid grid-cols-2
        w-2/3
        justify-self-center
        rounded-2xl
        bg-white
        sm:grid-cols-1
      "
    >
      <img
        src="../components/images/yummi2.png"
        class="w-full rounded-l-2xl"
        alt="yummi002"
      />
      <div class="py-5 pl-10 my-5">
        <div class="flex">
          <h2>{{ collection }}</h2>
          <img
            src="../components/icons/ver.svg"
            class="mx-2 h-5 w-auto"
            alt="verified"
          />
        </div>
        <h3 class="text-4xl font-black">{{ title }}</h3>
        <p class="pt-10 pb-5 pr-5 font-black">
          {{ description }}
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

<style scoped></style>
