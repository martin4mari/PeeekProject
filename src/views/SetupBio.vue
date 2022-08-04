<template>
  <div class="flex dark:dark light justify-center items-center animate-slide">
    <!-- bio -->
    <div class="flex flex-col group">
      <p class="text-[0.7rem] group-hover:translate-x-2 duration-700">Edit bio</p>
      <svg
        class="rotate-180 dark:invert"
        width="190"
        height="10"
        viewBox="0 0 190 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.15268" cy="5.02515" r="4.15268" fill="#010114" />
        <rect x="6.67513" y="4.19078" width="182.73" height="1.66876" fill="#010114" />
      </svg>
    </div>

    <div class="w-1/2">
      <textarea
        placeholder="Write some short text you want the world to see about you."
        class="py-5 w-4/5 my-5 dark:dark light placeholder:text-zinc-900 dark:placeholder:text-zinc-100 text-2xl font-thin text-center outline-none"
      ></textarea>
    </div>
    <div class="absolute z-40 right-10">
      <router-link to="/setup/socials">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
        >
          <path
            d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
          ></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

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
