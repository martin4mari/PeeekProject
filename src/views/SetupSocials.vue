<template>
  <div
    class="flex flex-col dark:dark light justify-center items-center animate-slide my-2"
  >
    <!--socials-->
    <div class="dark:dark light">
      <div class="flex justify-left flex-row-reverse">
        <input
          type="text"
          class="peer w-36 dark:dark light placeholder:light dark:placeholder:dark text-2xl font-thin outline-none border-b-2"
        />
        <label class="pr-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Twitter
        </label>
      </div>
      <div class="flex justify-left flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="pr-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Discord
        </label>
      </div>

      <div class="flex justify-left flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="pr-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >JPG Store
        </label>
      </div>
      <div class="flex justify-left flex-row-reverse">
        <input
          type="text"
          class="peer w-36 text-2xl placeholder:text-2xl font-thin outline-none border-b-2 dark:dark light placeholder:light dark:placeholder:dark"
        />
        <label class="pr-2 peer-focus:after:content-['@'] text-2xl font-thin text-center"
          >Website
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");

* {
  font-family: "Manrope", sans-serif;
}
</style>
