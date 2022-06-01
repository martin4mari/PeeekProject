<template>
  <div
    class="flex flex-col dark:bg-slate-900 pt-10 justify-center items-center"
  >
    <!-- nft pfp -->
    <div
      class="
        m-2
        bg-slate-900
        dark:bg-slate-100
        rounded-full
        w-20
        h-20
        flex
        justify-center
      "
    >
      <img
        src="@/components/icons/eyes.svg"
        alt="avatar"
        class="w-16 h-20 p-2"
      />
    </div>

    <!-- <p class="absolute left-20" @click="screen=true">choose a nft from your walllet</p> -->

    <!-- username -->
    <input
      type="text"
      placeholder="@Username"
      class="
        dark:bg-slate-900
        bg-slate-100
        placeholder:text-slate-900
        dark:placeholder:text-slate-100
        text-4xl
        dark:placeholder:text-slate-100
        placeholder:text-4xl
        p-2
        font-bold
        text-center
        dark:text-slate-100
        outline-none
      "
    />

    <!-- bio -->
    <textarea
      placeholder="Write some short text you want the world to see about you."
      class="
        h-full
        w-2/3
        py-5
        my-5
        bg-slate-100
        dark:text-slate-100 dark:bg-slate-900
        placeholder:text-slate-900 placeholder:dark:text-slate-100
        text-slate-900 text-4xl text-2xl
        font-thin
        text-center
        outline-none
      "
    ></textarea>

    <!--figma desing-->
    <div class="flex justify-center flex-row-reverse">
      <input
        type="text"
        class="
          dark:bg-slate-900
          peer
          w-36
          bg-slate-100
          placeholder:text-slate-900
          dark:placeholder:text-slate-100
          text-2xl
          dark:text-slate-100
          placeholder:text-2xl
          font-thin
          outline-none
          border-b-2
          dark:border-slate-100
          border-slate-900
        "
      />
      <label
        class="
          px-2
          dark:bg-slate-900
          peer-focus:after:content-['@']
          bg-slate-100
          text-slate-900
          dark:text-slate-100
          text-2xl
          dark:text-slate-100
          text-2xl
          font-thin
          text-center
        "
        >Twitter
      </label>
    </div>
    <div class="flex justify-center flex-row-reverse">
      <input
        type="text"
        class="
          dark:bg-slate-900
          peer
          w-36
          bg-slate-100
          placeholder:text-slate-900
          dark:placeholder:text-slate-100
          text-2xl
          dark:text-slate-100
          placeholder:text-2xl
          font-thin
          outline-none
          border-b-2
          dark:border-slate-100
          border-slate-900
        "
      />
      <label
        class="
          px-2
          dark:bg-slate-900
          peer-focus:after:content-['@']
          bg-slate-100
          text-slate-900
          dark:text-slate-100
          text-2xl
          dark:text-slate-100
          text-2xl
          font-thin
          text-center
        "
        >Discord
      </label>
    </div>
    <div class="flex justify-center flex-row-reverse">
      <input
        type="text"
        class="
          dark:bg-slate-900
          peer
          w-36
          bg-slate-100
          placeholder:text-slate-900
          dark:placeholder:text-slate-100
          text-2xl
          dark:text-slate-100
          placeholder:text-2xl
          font-thin
          outline-none
          border-b-2
          dark:border-slate-100
          border-slate-900
        "
      />
      <label
        class="
          px-2
          dark:bg-slate-900
          peer-focus:after:content-['@']
          bg-slate-100
          text-slate-900
          dark:text-slate-100
          text-2xl
          dark:text-slate-100
          text-2xl
          font-thin
          text-center
        "
        >JPG Store
      </label>
    </div>
    <div class="flex justify-center flex-row-reverse">
      <input
        type="text"
        class="
          dark:bg-slate-900
          peer
          w-36
          bg-slate-100
          placeholder:text-slate-900
          dark:placeholder:text-slate-100
          text-2xl
          dark:text-slate-100
          placeholder:text-2xl
          font-thin
          outline-none
          border-b-2
          dark:border-slate-100
          border-slate-900
        "
      />
      <label
        class="
          px-2
          dark:bg-slate-900
          peer-focus:after:content-['@']
          bg-slate-100
          text-slate-900
          dark:text-slate-100
          text-2xl
          dark:text-slate-100
          text-2xl
          font-thin
          text-center
        "
        >Website
      </label>
    </div>

    <!-- <custom-setup></custom-setup> -->
    <router-link to="/user">
      <button
        class="
          my-10
          border-2
          p-1
          rounded-full
          w-44
          border-slate-900
          dark:border-slate-100
          flex
          p-2
        "
      >
        <img src="../components/icons/eyes.svg" alt="" class="w-6 h-6" />
        <span class="px-2 dark:text-slate-100">Connect Wallet</span>
      </button></router-link
    >
  </div>
</template>

<script setup>
// import CustomSetup from "../components/CustomSetup.vue";
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
