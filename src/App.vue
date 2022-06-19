<script>
import HeaderComponent from "./views/HeaderComponent.vue";
import FooterView from "./views/FooterView.vue";

export default {
  data() {
    return {
      isActive: false,
      style: { backgroundColor: "", color: "" },
    };
  },
  methods: {
    dark() {
      this.isActive = !this.isActive;
    },
  },
  components: { HeaderComponent, FooterView },
};
</script>

<template>
  <div :class="isActive ? '' : 'dark'" v-bind:style="style">
    <button
      @click="dark()"
      class="hidden dark:dark light button absolute z-20 mr-5 bg-gray-100 border-gray-500 right-0 rounded-b-full lg:block p-[1px] pt-[1px]"
    >
      <img
        v-show="isActive === false"
        src="./components/icons/sun.svg"
        class="w-4 h-4"
        alt=""
      />
      <img
        v-show="isActive === true"
        src="./components/icons/lmoon.svg"
        class="w-4 h-4"
        alt=""
      />
    </button>

    <header-component> </header-component>

    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Space+Grotesk:wght@300&family=Work+Sans&display=swap");
main {
  font-family: "Manrope", sans-serif;
}

.button {
  border: solid 1px;
  border-top: none;
}
</style>
