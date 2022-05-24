<template>
  <header class="header">
    <div class="flex flex-row justify-around">
      <router-link to="/"
        ><img
          src="@/components/icons/peeekEye.svg"
          class="w-20 pt-4"
          alt="peeek-logo"
      /></router-link>

      <div class="absolute right-0 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-slate-900 fill-slate-900 dark:fill-slate-100 dark:stroke-slate-100"
         
        
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </div>

      <nav class="invisible lg:visible">
        <div        
          class="
            justify-between
            p-5
            text-slate-900 text-xs
            dark:text-slate-100
          "
        >
          <ul class="flex">
            <router-link to="/about">
              <li class="font-bold hover:scale-110 duration-300">About</li>
            </router-link>
            <router-link to="/about">
              <li class="font-bold px-4 hover:scale-110 duration-300">
                My Wallet
              </li>
            </router-link>
            <li class="font-bold text-blue-700 hover:scale-110 duration-300">
              💬Share $Sampos Wallet
            </li>
            <button></button>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.peeek {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
