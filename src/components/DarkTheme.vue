<script setup>
import { ref } from "@vue/reactivity";

const active = ref(false);

const emits = defineEmits({
  onChange: Boolean,
});
</script>

<template>
  <div>
    <button
      @click="emits('onChange', active), (active = !active)"
      class="dark:dark light absolute z-40 mr-5 bg-gray-100 border-gray-300 dark:border-gray-600 right-24 lg:right-0 rounded-b-full lg:block p-[1px] pt-[1px] border-[1px]"
    >
      <img v-show="!active" src="../components/icons/sun.svg" class="w-4 h-4" alt="" />
      <img v-show="active" src="../components/icons/lmoon.svg" class="w-4 h-4" alt="" />
    </button>
  </div>
</template>
