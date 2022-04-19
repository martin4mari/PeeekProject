<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header flex flex-row justify-around">
    <RouterLink to="/"
      ><img
        src="@/components/icons/peeekEye.svg"
        class="w-24 h-20"
        alt="peeek-logo"
    /></RouterLink>

    <div class="m-6">
      <img src=@/components/icons/Vector.svg class="h-4 w-auto my-2
      hover:opacity-70" alt="settings-icon">
    </div>
  </header>

  <section>
    <!--sampo section-->

    <div class="m-2 flex flex-col items-center">
      <img
        src="../components/images/avatar.png"
        class="w-28 h-28"
        alt="kid-avatar"
      />
      <h2 class="pt-2 text-3xl font-semibold">Sampo</h2>
      <p class="p-2">
        chaotic good — chain agnostic <br />
        building a universe → @FortGotten
      </p>
      <nav
        class="
          w-15
          h-7
          flex flex-row
          border-solid border-2 border-black
          rounded-full
          justify-around
        "
      >
        <ul class="divide-x divide-black flex flex-row">
          <li class="p-1.5">
            <a href="#">
              <img
                src="../components/icons/Twitter.svg"
                class="w-4.5 h-3.5 hover:opacity-90"
                alt="twitter-icon"
              />
            </a>
          </li>
          <li class="p-1.5">
            <a href=""
              ><img
                src="../components/icons/Instagram.svg"
                class="w-4.5 h-3.5 hover:opacity-90"
                alt="instagram-icon"
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>
