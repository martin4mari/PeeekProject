<template>
  <!-- floating window -->
  <div
    :class="window ? 'visible' : 'hidden'"
    class="
      p-5
      absolute
      z-40
      w-1/3
      bg-slate-900/90
      dark:bg-slate-100/90
      rounded-lg
      text-white
      h-1/2
      right-0
    "
  >
    <img src="@/components/images/avatar.png" @click="selectNft()" alt="" />
  </div>
  <div
    class="
      h-screen
      w-full
      transform-all
      group
      flex flex-col
      justify-center
      dark:bg-slate-900
    "
  >
    <!-- wallet connected --------

    <button
      class="absolute -top-16 right-20 z-40 border-2 rounded-full border-slate-900 dark:text-slate-100 dark:border-slate-100 p-x-4 p-2"
    >
      Wallet Connected
    </button> -->



    <!-- nft pfp -->
    <div
      class="
        group
        m-5
        bg-slate-900
        dark:bg-slate-100
        rounded-full
        w-20
        h-20
        flex
        justify-center
        self-center
      "
      @click="pop()"
    >
      <p
        class="
          absolute
          group-hover:-translate-x-2
          duration-1000
          top-10
          left-36
          text-xs
          w-48
          after:content-['']
          after:block
          after:w-52
          after:right-10
          after:rounded-l-full
          after:border-2
          after:border-slate-900
          dark:text-slate-100 dark:after:border-slate-100
        "
      >
        Select an NFT to use as PFP
      </p>

      <img
        src="@/components/icons/eyes.svg"
        :class="!nft.selected ? 'visible' : 'hidden'"
        alt="avatar"
      />
      <img
        src="@/components/images/avatar.png"
        :class="nft.selected ? 'visible' : 'hidden'"
        class="w-20 h-20"
        alt="avatar"
      />
    </div>

    <!-- username -->
    <p
      class="
        absolute
        z-20
        group-hover:translate-x-2
        duration-1000
        text-xs
        top-64
        left-72
        w-48
        after:content-['']
        after:block
        after:w-52
        after:rounded-l-full
        after:border-2
        after:border-slate-900
        dark:text-slate-100 dark:after:border-slate-100
      "
    >
      Read the wallet's Handle
    </p>

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
    <p
      class="
        absolute
        group-hover:-translate-x-2
        duration-1000
        right-16
        z-20
        text-xs
        w-48
        after:content-['']
        after:block
        after:w-52
        after:rounded-l-full
        after:border-2
        after:border-slate-900
        dark:text-slate-100 dark:after:border-slate-100
      "
    >
      Edit Bio
    </p>

    <textarea
      placeholder="Write some short text you want the world to see about you."
      class="
        bg-slate-100
        dark:text-slate-100 dark:bg-slate-900
        placeholder:text-slate-900 placeholder:dark:text-slate-100
        text-slate-900 text-4xl text-2xl
        font-thin
        m-5
        text-center
        outline-none
      "
    ></textarea>

    <!--figma desing-->
    <div class="flex ml-20 justify-center flex-row-reverse">
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
    <div class="flex ml-20 justify-center flex-row-reverse">
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
    <div class="flex ml-20 justify-center flex-row-reverse">
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
    <div class="flex ml-20 justify-center flex-row-reverse">
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

    <!-- 
    <div class="flex flex-col justify-center p-2">
      <input
        type="text"
        placeholder="Twitter @"
        class="dark:bg-slate-900 bg-slate-100 placeholder:text-slate-900 dark:placeholder:text-slate-100 text-2xl dark:text-slate-100 placeholder:text-2xl font-thin text-center outline-none"
      />
      <input
        type="text"
        placeholder="Twitter @"
        class="dark:bg-slate-900 bg-slate-100 placeholder:text-slate-900 dark:placeholder:text-slate-100 text-2xl dark:text-slate-100 placeholder:text-2xl font-thin text-center outline-none"
      />
      <input
        type="text"
        placeholder="Twitter @"
        class="dark:bg-slate-900 bg-slate-100 placeholder:text-slate-900 dark:placeholder:text-slate-100 text-2xl dark:text-slate-100 placeholder:text-2xl font-thin text-center outline-none"
      />
      <input
        type="text"
        placeholder="Twitter @"
        class="dark:bg-slate-900 bg-slate-100 placeholder:text-slate-900 dark:placeholder:text-slate-100 text-2xl dark:text-slate-100 placeholder:text-2xl font-thin text-center outline-none"
      />
    </div> -->

    <!-- <h2 class="pt-10 pb-5 font-bold text-2xl">Set up your profile</h2>

      <div>
        <label class="font-bold" for="UserName">User name/URL</label><br />
        <input
          type="text"
          placeholder="User"
          class="m-2 px-2 rounded-lg"
          v-model="user"
        />
        <p class="text-gray-400 text-sm" :class="user ? 'visible' : 'hidden'">
          peeek.me/{{ user }}
        </p>

        <p
          class="text-red-400 text-sm"
          :class="v$.user.$error ? 'visible' : 'hidden'"
        >
          5 min and 10 charecters max
        </p>
      </div>

      <div>
        <label class="font-bold" for="bio">BIO</label><br />
        <textarea
          type="textarea"
          placeholder="Write something about you"
          class="m-2 px-2 rounded-lg h-20"
          v-model="bio"
        >
        </textarea>
        <p
          class="text-red-400 text-sm"
          :class="v$.bio.$error ? 'visible' : 'hidden'"
        >
          Ups! only 160 characters
        </p>
      </div>

      <div>
        <label class="m-2 font-bold" for="socials">Links</label><br />
        <input
          class="m-2 px-2 rounded-lg"
          type="text"
          placeholder="Discord"
          v-model="link.discord"
        />
        <input
          class="m-2 px-2 rounded-lg"
          type="text"
          placeholder="Twitter"
          v-model="link.twitter"
        />
        <input
          class="m-2 px-2 rounded-lg"
          type="text"
          placeholder="JPG Store"
          v-model="link.store"
        />
        <input
          class="m-2 px-2 rounded-lg"
          type="text"
          placeholder="Website"
          v-model="link.website"
        />
      </div>
      
      <router-link to="/user">
        <button
          @click="submitForm"
          class="w-20 h-10 m-5 rounded-full bg-black text-white self-center"
        >
          Save
        </button></router-link
      >

     <router-link to="/:" + user></router-link> route params -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nft: {
        img: "",
        selected: false,
      },
      window: false,
    };
  },
  methods: {
    selectNft() {
      this.nft.selected = !this.nft.selected;
    },
    pop() {
      this.window = !this.window;
    },
  },
};

// import useVuelidate from "@vuelidate/core";
// import { required, minLength, maxLength } from "@vuelidate/validators";

// export default {
//   data() {
//     return {
//       v$: useVuelidate(),
//       user: "",
//       bio: "",
//       link: {
//         discord: "",
//         twitter: "",
//         store: "",
//         website: "",
//       },
//     };
//   },
//   methods: {
//     submitForm() {
//       this.v$.$validate();
//       //checks all inputs
//       if (!this.v$.$error) {
//         //if any error
//         alert("Changes saved " + this.user + " !");
//       } else {
//         alert("Error :(");
//       }
//     },
//   },
//   validations() {
//     return {
//       user: {
//         required,
//         minLength: minLength(5),
//         maxLength: maxLength(10),
//       },
//       bio: {
//         maxLength: maxLength(160),
//       },
//     };
//   },
// };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>
