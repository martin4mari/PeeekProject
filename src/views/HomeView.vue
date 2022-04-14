<script>
export default {
  name: "AboutView",

  data() {
    return {
      title: ["Yummi Universe", "Claymate", "haha"],

      /*    collection: [{
        id:
        title:
        img:[las dos primeras imagenes]
        item:{
          [id:
          title
          img:
          description:
          collection:
          ]
        }

      }]*/
    };
  },
};
</script>

<template>
  <section>
    <div class="grid grid-cols-4 gap-3 m-5 p-5">
      <div class="p-5">
        <img src="../components/icons/yummi2.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>
      <div class="p-5">
        <RouterLink to="/about">
          <img src="../components/icons/yummi2.png" alt="" />
          <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
        </RouterLink>
      </div>
      <div class="p-5">
        <img src="../components/icons/back.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>
      <div class="p-5">
        <img src="../components/icons/yummi2.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>
      <div class="p-5">
        <img src="../components/icons/back.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>
      <div class="p-5">
        <img src="../components/icons/yummi2.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>
      <div class="p-5">
        <img src="../components/icons/yummi2.png" alt="" />
        <h3 class="font-bold py-2 text-center">Yummi Universe</h3>
      </div>

      <!--second img overflows. check on it-->
      <div class="p-5">
        <img
          src="../components/icons/back.png"
          class="w-60 h-auto absolute z-0 rotate-6"
          alt=""
        />

        <img
          src="../components/icons/yummi2.png"
          class="w-60 h-auto absolute"
          alt=""
        />
        <!--<h3 class="font-bold py-2 text-center">Yummi Universe</h3>-->
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
