<template>
  <div class="bg flex justify-center items-center p-5 flex-col">
    <div class="absolute w-full h-full dark:bg-zinc-900 bg-zinc-100 opacity-80"></div>
    <div class="w-80 rounded-md p-10 m-10 bg-zinc-50 text-zinc-900">
      <div class="absolute left-0 top-0">
        <svg class="w-5 h-5 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </div>
      <h2 class="text-2xl font-extrabold py-1">Connect your wallet</h2>
      <p class="text-[0.7rem] text-gray-500">
        We only detect your wallet ID to make sure you are not a bot. We do not access the
        wallet or perform any operation with it
      </p>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Metamask</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Coinbase Mobile</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold truncate">WalletConnect (Trust)</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Fortmatic</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Tezos (HEN)</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Phantom</p>
      </div>
      <div class="border-2 border-gray-200 rounded-md flex my-2 text-[12px] p-1">
        <img
          src="../components/images/METALOGO.png"
          alt=""
          class="p-1 w-10 h-6 self-start"
        />
        <p class="px-2 self-center font-semibold">Nifty Gateway</p>
      </div>
    </div>
    <router-link to="/setup/profile">
      <walletButton></walletButton>
    </router-link>
  </div>
</template>

<script setup>
import WalletButton from "../components/WalletButton.vue";
</script>

<style>
.bg {
  background-image: url("../components/images/nftfooter.png");
  background-position: bottom;
}
</style>
