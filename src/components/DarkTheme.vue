<script setup>
import { ref } from "@vue/reactivity";

const active = ref(false);

const emits = defineEmits({
  onChange: Boolean,
});
</script>

<template>
  <div :class="active ? '' : 'dark'">
    <button
      @click="emits('onChange', active), (active = !active)"
      class="hidden dark:dark light button absolute z-20 mr-5 bg-gray-100 border-gray-500/50 right-0 rounded-b-full lg:block p-[1px] pt-[1px]"
    >
      <img v-show="!active" src="../components/icons/sun.svg" class="w-4 h-4" alt="" />
      <img v-show="active" src="../components/icons/lmoon.svg" class="w-4 h-4" alt="" />
    </button>
  </div>
</template>

<style>
.button {
  border: solid 1px;
  border-top: none;
}
</style>
