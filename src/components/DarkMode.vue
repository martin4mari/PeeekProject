<script setup>
import { ref } from "@vue/reactivity";



const isActive =ref(true)

const props = defineProps({
  dark: Boolean
})



const emits = defineEmits({
  onChange: Boolean,

});
</script>  


<template>
  <div @click="emits('onChange',isActive)">
  Holaaaaa {{isActive}} {{dark}}
  </div>
</template>