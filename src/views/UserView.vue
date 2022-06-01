<script setup>
import { ref } from "@vue/reactivity";
import UserProfile from "../components/UserProfile.vue";
import FilterComponent from "../components/filterComponent.vue";

const style = ref({
  backgroundColor: "",
  color: "",
});

const list = ref(false);
const newCollection = ref({
  title: "",
  i: "src/components/images/collect/campfire.png",
});


function addCollection() {
  if (newCollection.value) {
    collections.value.push({
      title: newCollection.value.title,
      img: newCollection.value.i,
    });
  }

  newCollection.value = "";
  open.value = false;
}

function deleteCollection(index) {
  collections.value.splice(index, 1);
}

const collections = ref([
  {
    title: "Claymate",
    img: "src/components/images/collect/Claymate.png",
  },
  {
    title: "Ada Blocks",
    img: "src/components/images/collect/AdaBlocks.png",
  },
  {
    title: "Yummi Universe",
    img: "src/components/images/yummi6.png",
  },

  {
    title: "Space Bud",
    img: "src/components/images/collect/spacebud.png",
  },
  {
    title: "Cyclr",
    img: "src/components/images/collect/cyclr.png",
  },
  {
    title: "Unsig",
    img: "src/components/images/collect/unsig.png",
  },
  {
    title: "Ranging Pets",
    img: "src/components/images/collect/RangingPets.png",
  },
]);

const nft = ref([
  {
    img: "src/components/images/collect/AdaBlocks.png",
  },
  {
    img: "src/components/images/collect/campfire.png",
  },
  {
    img: "src/components/images/yummi6.png",
  },
  {
    img: "src/components/images/collect/Cyclr.png",
  },
  {
    img: "src/components/images/collect/RangingPets.png",
  },
  {
    img: "src/components/images/collect/spacebud.png",
  },
]);

const open = ref(false);
</script>

<template>
  <div
    v-if="open"
    class="modal"
    @keydown.esc="open = false"
    @keydown.enter="open = false"
  >
    <section>
      <div
        class="
          dark:bg-slate-900 dark:text-slate-100
          flex flex-col
          justify-between
          items-start
          m-20
          bg-slate-100
          rounded-lg
          p-10
        "
      >
        <h2 class="text-4xl text-slate-900 dark:text-slate-100 my-5">
          Make a collection
        </h2>
        <div class="">
          <label
            for=""
            class="
              px-2
              dark:bg-slate-900
              peer-focus:after:content-['@']
              bg-slate-100
              text-slate-900
              dark:text-slate-100
              text-sm
              dark:text-slate-100
              text-2xl
              font-thin
              text-center
            "
            >Name:</label
          >
          <input
            type="text"
            class="
              dark:bg-slate-900
              w-42
              bg-slate-100
              placeholder:text-slate-900
              dark:placeholder:text-slate-100
              text-2xl
              dark:text-slate-100
              placeholder:text-2xl
              font-thin
              outline-none
              border-b-[0.1rem]
              dark:border-slate-100
              border-slate-900
            "
            v-model="newCollection.title"
          />
        </div>


        <div class="flex w-full my-10">
          <div
            v-for="(img, index) in nft"
            :key="index"
            class="flex flex-row justify-around"
          >
            <img :src="img.img" :alt="index" class="p-2 w-44 h-44" />
          </div>
        </div>
        <button
          @click="addCollection()"
          class="
            dark:bg-slate-100 dark:text-slate-900
            rounded-full
            bg-slate-900
            text-white
            hover:opacity-90
            self-end
            mx-4
            p-3
            font-thin
            text-xs
          "
        >
          Save
        </button>
      </div>
    </section>
  </div>

  <div class="dark:bg-slate-900 dark:text-slate-100" v-bind:style="style">
    <user-profile v-bind:style="style"></user-profile>
    <filter-component v-bind:style="style"></filter-component>

    <!-- switch list/grid -->
    <div class="flex justify-evenly md:hidden lg:hidden opacity-50 dark:invert">
      <div
        @click="list = false"
        class="
          border-b-[0.1rem] border-black
          p-2
          w-1/2
          flex
          justify-center
          mx-1
        "
      >
        <img src="@/components/icons/grid.svg" class="w-4 h-4" alt="grid" />
      </div>

      <div
        @click="list = true"
        class="
          border-b-[0.1rem] border-black
          p-2
          w-1/2
          flex
          justify-center
          mr-1
        "
      >
        <img src="@/components/icons/listIcon.svg" class="w-4 h-4" alt="list" />
      </div>
    </div>

    <!-- empty section------- -->
    <div v-if="collections.length === 0" class="w-full h-48 pt-20">
      <!-- add some icon or clean filters -->
      <p class="text-center opacity-70">Sorry, no collections yet :(</p>
    </div>

    <section class="flex flex-col justify-center px-2 lg:px-20 pt-5 lg:mx-10">
      <div
        class="grid md:grid-cols-3 gap-1 lg:gap-12 lg:grid-cols-4"
        :class="list ? 'grid-cols-1 ' : 'grid-cols-3'"
      >
        <div :key="index" v-for="(collection, index) in collections">
          <router-link to="/about">
            <div
              @click="deleteCollection(index)"
              class="
                flex flex-col
                justify-between
                rounded-lg
                group
                transition-all
                duration-300
              "
            >
              <img
                v-bind:src="collection.img"
                :alt="collection.title"
                class="self-center duration-500"
              />
              <img
                class="
                  absolute
                  top-0
                  -z-10
                  scale-90
                  group-hover:-translate-y-7
                  duration-500
                "
                alt=""
                src="../components/images/collect/Claymate.png"
              />
              <img
                src="../components/images/collect/RangingPets.png"
                class="
                  absolute
                  top-0
                  -z-10
                  scale-95
                  group-hover:-translate-y-3.5
                  duration-500
                "
                alt=""
              />
              <h3 class="text-sm font-light py-4 text-center">
                {{ collection.title }}
              </h3>

              <!-- collection icon
            <div
              class="w-44 h-44 absolute opacity-0 left-50 lg:right-16 top-2 hover:opacity-90"
            >
              <img
                src="../components/icons/col.svg"
                class="w-4 h-4 absolute -right-10 top-2"
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
      class="
        flex flex-col
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
          mb-2
          text-slate-900
          border-[0.2rem]
          text-xs
          bg-slate-100
          rounded-full
          w-12
          h-12
          text-slate-900
          hover:text-blue-600
        "
        @click="open = true"
      >
        Add
      </button>
      <button
        class="
          text-slate-900
          border-[0.2rem]
          text-xs
          bg-slate-100
          rounded-full
          w-12
          h-12
          text-slate-900
          hover:text-blue-600
        "
      >
        Edit
      </button>
    </div>
  </div>
</template>








<!-- setup color 
    <input
      class="m-2 px-2 rounded-lg"
      type="color"
      v-model="style.backgroundColor"
    />
    <input class="m-2 px-2 rounded-lg" type="color" v-model="style.color" />-->