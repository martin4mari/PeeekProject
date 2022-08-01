<template>
  <div
    class="flex dark:dark light pt-10 justify-center content-center m-5 lg:m-20 lg:pt-44 group"
  >
    <input
      type="text"
      placeholder="@Username"
      class="dark:dark light placeholder:text-zinc-900 dark:placeholder:text-zinc-100 text-4xl placeholder:text-5xl p-2 font-bold text-center outline-none"
    />
    <div class="flex flex-col group">
      <p class="text-[0.7rem] self-end group-hover:-translate-x-2 duration-700">
        Read the wallet’s Handle
      </p>
      <svg
        width="190"
        height="10"
        viewBox="0 0 190 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.15268" cy="5.02515" r="4.15268" fill="white" />
        <rect x="6.67513" y="4.19078" width="182.73" height="1.66876" fill="white" />
      </svg>
    </div>
  </div>

  <div class="absolute z-30 right-5">
    <router-link to="/setup/bio">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
      >
        <path
          d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
        ></path></svg
    ></router-link>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");

* {
  font-family: "Manrope", sans-serif;
}
</style>
