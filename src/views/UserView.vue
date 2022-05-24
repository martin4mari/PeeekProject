<script setup>
import { ref } from "@vue/reactivity";
import UserProfile from "../components/UserProfile.vue";

const columns = ref(true);

const style = ref({
  backgroundColor: "",
  color: "",
});

function col() {
  columns.value = !columns.value;
}

const newCollection = ref("");

function addCollection() {
  if (newCollection.value) {
    collections.value.push({
      title: newCollection.value,
      img: "src/components/images/collect/unsig.png",
    });
  }

  newCollection.value = "";
}


const collections = ref([
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/Claymate.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/AdaBlocks.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/yummi6.png",
  },

  {
    title: "Yummi Universe",
    img: "src/components/images/collect/spacebud.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/ShitCoins.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/cyclr.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/unsig.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/collect/RangingPets.png",
  },
]);
</script>

<template>
  <div class="absolute w-100 h-20 bg-slate-800/50 z-20 right-0 p-10">
    <label for="">Collection name:</label>
    <input type="text" class="" v-model="newCollection" />
  </div>

  <user-profile></user-profile>

  <div class="dark:bg-slate-900 dark:text-slate-100" v-bind:style="style">
    <!-- switch list/grid -->
    <div class="flex justify-evenly lg:hidden">
      <p class="text-xm font-bold p-2 border-b-2 border-black" @click="col()">
        <img src="@/components/icons/grid.svg" class="w-4 h-4" alt="grid" />
      </p>
      <p class="text-xm p-2 border-b-2 border-black" @click="col()">
        <img src="@/components/icons/listIcon.svg" class="w-4 h-4" alt="col" />
      </p>
    </div>

    <section class="flex flex-col justify-center lg:px-20 pt-10">
      <div
        class="grid gap-3 md:grid-cols-2 lg:grid-cols-4"
        :class="columns ? 'grid-cols-1' : 'grid-cols-3'"
      >
        <div :key="index" v-for="(collection, index) in collections">
          <router-link to="/about/">
            <div
              class="
                flex flex-col
                justify-between
                hover:scale-105
                duration-300
                pb-10
              "
            >
              <img
                v-bind:src="collection.img"
                :alt="collection.title"
                class="self-center w-64 shadow-md hover:shadow-gray-500/80 "
                @mouseover="list()"
              />
              <img
                v-show="index == 2 || index == 5"
                src="../components/images/yummi3.png"
                class="absolute top-0 -z-10 scale-75 -translate-y-12"
                alt=""
              />
              <img
                v-show="index == 2 || index == 5"
                src="../components/images/yummi7.png"
                class="absolute top-0 -z-20 scale-50 -translate-y-24"
                alt=""
              />

              <h3 class="text-sm font-light py-4 text-center">
                {{ collection.title }}
              </h3>

              <!-- collection icon
              <div
                class="w-44 h-44 absolute z-30 opacity-0 right-8 lg:right-16 top-2 hover:opacity-90"
              >
                <img
                  src="../components/icons/col.svg"
                  class="w-4 h-4 absolute right-0"
                  alt="collection"
                />
              </div> -->
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- new collecytion button -->
    <div
      alt="New Collection"
      @click="addCollection()"
      class="
        h-1/3
        fixed
        z-20
        bottom-0
        right-5
        hover:-translate-x-10
        duration-300
        opacity-0
        hover:opacity-100
      "
    >
      <button
        class="
          dark:bg-slate-100
          text-4xl
          bg-slate-900
          rounded-full
          w-12
          h-12
          text-slate-100
        "
      >
        +
      </button>
    </div>

    <!-- setup color  -->
    <input
      class="m-2 px-2 rounded-lg"
      type="color"
      v-model="style.backgroundColor"
    />
    <input class="m-2 px-2 rounded-lg" type="color" v-model="style.color" />
  </div>
</template>

<style scoped>
h3 {
  font-family: "Space Grotesk", "sans-serif";
}
</style>
