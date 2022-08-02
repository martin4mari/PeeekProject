<template>
  <div
    class="flex dark:dark light pt-10 justify-center items-center m-5 lg:m-20 lg:pt-44 group animate-wiggle"
  >
    <!-- nft pfp -->
    <div class="m-2 dark:light dark rounded-full w-28 h-28 flex justify-center">
      <img src="@/components/icons/eyes.svg" alt="avatar" class="w-16 h-18 p-2" />
    </div>
    <div class="flex flex-col group">
      <p class="text-[0.7rem] group-hover:-translate-x-2 duration-700 self-end">
        Select an NFT to use as PFP
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
    <div class="absolute right-0">
      <router-link to="/setup/username"
        ><svg
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
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");

* {
  font-family: "Manrope", sans-serif;
}
</style>
