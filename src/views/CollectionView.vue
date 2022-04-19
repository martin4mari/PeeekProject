<script>
export default {
  name: "CollectionView",

  data() {
    return {
      collection: "Yummi Universe",
      items: [
        {
          title: "Yummi001",
          id: 1,
        },
        {
          title: "Yummi002",
          id: 2,
        },
        {
          title: "Yummi003",
          id: 3,
        },
        {
          title: "Yummi004",
          id: 4,
        },
        {
          title: "Yummi005",
          id: 5,
        },
        {
          title: "Yummi006",
          id: 6,
        },
        {
          title: "Yummi007",
          id: 7,
        },
        {
          title: "Yummi008",
          id: 8,
        },
      ],
    };
  },
};
</script>

<template>
  <section class="flex flex-col justify-center mx-24 my-10">
    <h2 class="p-2 text-3xl font-black py-4">{{ collection }}</h2>
    <div class="grid grid-cols-4 gap-3 sm:grid-cols-1 md:grid-cols-1">
      <div :key="item.id" v-for="item in items" class="p-2 w-49">
        <RouterLink :to="'/about/' + item.id">
          <!--<img :src="img"/>-->
          <img
            src="@/components/images/yummi2.png"
            :alt="`${item.title}`"
            class="w-fill"
          />
          <h3 class="text-md font-black py-4 text-center">
            {{ item.title }}
          </h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>