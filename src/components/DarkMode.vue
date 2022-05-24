<script>
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
};
</script>  


<template>
  <div @click="dark()" :class="isActive ? 'dark' : ''"></div>
</template>