<script >
import HeaderComponent from "./views/HeaderComponent.vue";
import FooterView from "./views/FooterView.vue";

export default {
  data() {
    return {
      isActive: false,
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
  <div :class="!isActive ? 'dark' : ''" class="dark:bg-slate-900">
    <button
      @click="dark()"
      class=" button
        dark:bg-gray-400
        absolute
        z-20
        mr-5
        bg-gray-300
        border-gray-500
        right-0
        rounded-b-full
        dark:bg-slate-700
      "
    >
      <img
        v-show="isActive === false"
        src="./components/icons/sun.svg"
        class="w-5 h-5"
        alt=""
      />
      <img
        v-show="isActive === true"
        src="./components/icons/moon.svg"
        class="w-5 h-5"
        alt=""
      />
    </button>

    <header-component class="dark:bg-slate-900"> </header-component>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Manrope&family=Space+Grotesk:wght@700&family=Work+Sans&display=swap");
main {
  font-family: "Manrope", sans-serif;
}

.button{
  border:solid 1px;
  border-top: none;
}
</style>
