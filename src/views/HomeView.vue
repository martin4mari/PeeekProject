<script>
export default {
  name: "HomeView",

  data() {
    return {
      collections: [
        {
          title: "Clymate",
          id: 0,
        },
        {
          title: "Yummi Universe",
          id: 1,
          /*img: "",
          items: [
            {
              title,
              idItem,
              image,
              description
            }
          ],
          */
        },
        {
          title: "Ada Blocks",
          id: 2,
        },

        {
          title: "Shit Coins",
          id: 3,
        },

        {
          title: "Raging Pets",
          id: 4,
        },

        {
          title: "SpaceBud",
          id: 5,
        },

        {
          title: ":Cyclr",
          id: 6,
        },

        {
          title: "Unsig",
          id: 7,
        },
      ],
    };
  },
};
</script>

<template>
  <section class="flex flex-col justify-center mx-24 my-10">
    <div class="grid grid-cols-4 gap-3 justify-self-center sm:grid-cols-1 md:grid-cols-1">
      <div :key="collection.id" v-for="collection in collections" class="p-2">
        <RouterLink to="/about/">
          <!--<img :src="img"/>-->
          <img
            src="@/components/images/yummi2.png"
            :alt="`${collection.title}`"
            class="w-64 h-auto"
          />
          <h3 class="text-lg font-bold py-4 text-center">
            {{ collection.title }}
          </h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-family: "Space Grotesk", "sans-serif";
}
</style>