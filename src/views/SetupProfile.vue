<template>
  <div class="flex flex-col dark:dark light pt-10 justify-center items-center">
    <!-- nft pfp -->

    <div class="">
      <div class="m-2 dark:light dark rounded-full w-20 h-20 flex justify-center">
        <img src="@/components/icons/eyes.svg" alt="avatar" class="w-16 h-20 p-2" />
      </div>
    </div>

    <!-- <p class="absolute left-20" @click="screen=true">choose a nft from your walllet</p> -->

    <!-- username -->
    <div class="">
      <input
        type="text"
        placeholder="@Username"
        class="dark:dark light placeholder:text-zinc-900 dark:placeholder:text-zinc-100 text-4xl placeholder:text-4xl p-2 font-bold text-center outline-none"
      />
    </div>

    <!-- bio -->
    <div class="h-full w-full">
      <textarea
        placeholder="Write some short text you want the world to see about you."
        class="py-5 w-4/5 my-5 dark:dark light placeholder:text-zinc-900 dark:placeholder:text-zinc-100 text-2xl font-thin text-center outline-none"
      ></textarea>
    </div>

    <!--socials-->
    <div class="dark:dark light">
      <div class="flex justify-center flex-row-reverse">
        <input
          type="text"
          class="peer w-36 dark:dark light placeholder:light dark:placeholder:dark text-2xl font-thin outline-none border-b-2"
        />
        <label class="px-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Twitter
        </label>
      </div>
      <div class="flex justify-center flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="px-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Discord
        </label>
      </div>

      <div class="flex justify-center flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="px-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >JPG Store
        </label>
      </div>
      <div class="flex justify-center flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="px-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Website
        </label>
      </div>
    </div>

    <!-- <custom-setup></custom-setup> -->
    <div class="my-2 lg:my-14">
      <router-link to="/user">
        <WalletButton></WalletButton>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// import CustomSetup from "../components/CustomSetup.vue";
import WalletButton from "../components/WalletButton.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");

* {
  font-family: "Manrope", sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
  border-radius: 1rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(15, 21, 34);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #867a7a;
}
</style>
