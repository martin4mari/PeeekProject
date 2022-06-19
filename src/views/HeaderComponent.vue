<template>
  <header class="header dark:dark light">
    <div class="flex flex-row justify-between w-11/12 h-14 w-full">
      <router-link to="/"
        ><img
          src="@/components/icons/Peek.svg"
          class="w-20 pt-4 dark:invert mx-5"
          alt="peeek-logo"
        />
      </router-link>

      <nav class="hidden lg:inline text-xs items-center text-center mt-4">
        <ul class="flex flex-col md:flex-row lg:flex-row">
          <router-link to="/about">
            <li
              :class="
                this.$route.path === '/about'
                  ? 'text-blue-600'
                  : 'text-zinc-900 dark:text-zinc-100'
              "
              class="font-bold hover:scale-105 duration-300 p-1"
            >
              About
            </li>
          </router-link>
          <router-link to="/wallet">
            <li
              :class="
                this.$route.path === '/wallet'
                  ? 'text-blue-600'
                  : 'text-zinc-900 dark:text-zinc-100'
              "
              class="font-bold px-4 hover:scale-105 duration-300 p-1"
            >
              My Wallet
            </li>
          </router-link>
          <router-link to="/user">
            <li
              class="font-bold hover:scale-105 duration-300 p-1"
              :class="
                this.$route.path === '/user'
                  ? 'text-blue-600'
                  : 'text-zinc-900 dark:text-zinc-100'
              "
            >
              💬Share $Sampos Wallet
            </li>
          </router-link>

          <button
            class="rounded-md outline outline-[0.1rem] outline-zinc-500/70 dark:bg-zinc-800 bg-zinc-300/70 mx-3 text-zinc-500 p-1"
          >
            Address/$handle...
          </button>
        </ul>
      </nav>

      <div>
        <div class="lg:hidden right-0 m-2 z-40 fixed" @click="ok()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 stroke-zinc-900 fill-zinc-900 dark:fill-zinc-100 dark:stroke-zinc-100"
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
        </div>

        <!-- slider menu -->
        <div
          v-show="!dark"
          class="slider h-full py-10 px-2 w-screen dark:dark light right-0 top-0 fixed z-30 lg:hidden"
        >
          <ul class="flex flex-col text-center h-5/6 justify-around items-center text-xl">
            <router-link to="/about">
              <li
                :class="
                  this.$route.path === '/about'
                    ? 'text-blue-600'
                    : 'text-slate-900 dark:text-slate-100'
                "
                class="px-4 hover:scale-105 duration-300 p-1"
              >
                About
              </li>
            </router-link>
            <router-link to="/wallet">
              <li
                :class="
                  this.$route.path === '/wallet'
                    ? 'text-blue-600'
                    : 'text-slate-900 dark:text-slate-100'
                "
                class="px-4 hover:scale-105 duration-300 p-1"
              >
                My Wallet
              </li>
            </router-link>
            <router-link to="/user">
              <li
                :class="
                  this.$route.path === '/user'
                    ? 'text-blue-600'
                    : 'text-slate-900 dark:text-slate-100'
                "
                class="px-4 duration-300 p-1"
              >
                💬Share $Sampos Wallet
              </li>
            </router-link>

            <button
              class="w-1/2 rounded-md outline outline-[0.1rem] outline-slate-500/70 dark:bg-slate-800 bg-slate-300/70 mx-3 text-slate-500 p-1 self-center truncate"
            >
              Address/$handle...
            </button>
            <button class="dark:dark light rounded-full border-[1px] w-8 h-8 p-1">
              <!-- <img src="../components/icons/sun.svg" alt="" /> -->
              <img src="../components/icons/lmoon.svg" alt="" />
            </button>

            <nav class="flex m-2">
              <div
                class="border-[0.1rem] border-black/20 dark:bg-black/50 p-1 rounded-md w-9 h-9"
              >
                <a href=""
                  ><svg
                    width="24"
                    height="23"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.538 4.66203C16.538 5.32484 16.0006 5.86203 15.338 5.86203C14.6753 5.86203 14.138 5.32484 14.138 4.66203C14.138 3.99922 14.6753 3.46203 15.338 3.46203C16.0008 3.46203 16.538 3.99922 16.538 4.66203ZM10 13.3333C8.15906 13.3333 6.66672 11.8409 6.66672 10C6.66672 8.15906 8.15906 6.66672 10 6.66672C11.8409 6.66672 13.3333 8.15906 13.3333 10C13.3333 11.8409 11.8409 13.3333 10 13.3333ZM10 4.86484C7.16391 4.86484 4.86484 7.16391 4.86484 10C4.86484 12.8361 7.16391 15.1352 10 15.1352C12.8361 15.1352 15.1352 12.8361 15.1352 10C15.1352 7.16391 12.8361 4.86484 10 4.86484ZM10 1.80187C12.6702 1.80187 12.9864 1.81203 14.0408 1.86016C15.0158 1.90469 15.5453 2.0675 15.8977 2.20453C16.3644 2.38594 16.6975 2.60266 17.0475 2.95266C17.3975 3.3025 17.6142 3.63563 17.7956 4.1025C17.9325 4.45484 18.0955 4.98438 18.14 5.95937C18.1881 7.01391 18.1983 7.33016 18.1983 10.0003C18.1983 12.6705 18.1881 12.9867 18.14 14.0411C18.0955 15.0161 17.9327 15.5456 17.7956 15.898C17.6142 16.3647 17.3975 16.6978 17.0475 17.0478C16.6977 17.3978 16.3645 17.6145 15.8977 17.7959C15.5453 17.9328 15.0158 18.0958 14.0408 18.1403C12.9864 18.1884 12.6702 18.1986 10 18.1986C7.32969 18.1986 7.01344 18.1884 5.95906 18.1403C4.98406 18.0958 4.45453 17.933 4.10219 17.7959C3.63547 17.6145 3.30234 17.3978 2.95234 17.0478C2.6025 16.698 2.38563 16.3648 2.20422 15.898C2.06734 15.5456 1.90437 15.0161 1.85984 14.0411C1.81172 12.9866 1.80156 12.6703 1.80156 10.0003C1.80156 7.33016 1.81172 7.01391 1.85984 5.95937C1.90437 4.98438 2.06719 4.45484 2.20422 4.1025C2.38563 3.63578 2.60234 3.30266 2.95234 2.95266C3.30219 2.60266 3.63531 2.38594 4.10219 2.20453C4.45453 2.06766 4.98406 1.90469 5.95906 1.86016C7.01359 1.81203 7.32984 1.80187 10 1.80187ZM10 0C7.28422 0 6.94359 0.0115625 5.87703 0.0601562C4.81266 0.10875 4.08562 0.277812 3.44969 0.525C2.79203 0.780469 2.23438 1.1225 1.67844 1.67844C1.1225 2.23438 0.780469 2.79203 0.525 3.44969C0.277812 4.08578 0.10875 4.81266 0.0601562 5.87703C0.0115625 6.94359 0 7.28422 0 10C0 12.7158 0.0115625 13.0564 0.0601562 14.123C0.10875 15.1873 0.277812 15.9142 0.525 16.5503C0.780469 17.208 1.1225 17.7656 1.67844 18.3216C2.23438 18.8775 2.79203 19.2194 3.44969 19.475C4.08578 19.7222 4.81266 19.8913 5.87703 19.9398C6.94359 19.9884 7.28422 20 10 20C12.7158 20 13.0564 19.9884 14.123 19.9398C15.1873 19.8913 15.9142 19.7222 16.5503 19.475C17.208 19.2194 17.7656 18.8775 18.3216 18.3216C18.8775 17.7656 19.2194 17.208 19.475 16.5503C19.7222 15.9142 19.8913 15.1873 19.9398 14.123C19.9884 13.0564 20 12.7158 20 10C20 7.28422 19.9884 6.94359 19.9398 5.87703C19.8913 4.81266 19.7222 4.08578 19.475 3.44969C19.2194 2.79203 18.8775 2.23438 18.3216 1.67844C17.7656 1.1225 17.208 0.780625 16.5503 0.525C15.9142 0.277812 15.1873 0.10875 14.123 0.0601562C13.0564 0.0115625 12.7158 0 10 0Z"
                      fill="#2563eb
"
                    />
                  </svg>
                </a>
              </div>

              <div
                class="rounded-md mx-2 border-[0.1rem] border-black/20 dark:bg-black/50 p-1 w-9 h-9"
              >
                <a href="" class="bg-gray-300"
                  ><svg
                    width="22"
                    height="25"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.0003 3.00364C21.192 3.3718 20.3216 3.62067 19.4086 3.73187C20.3409 3.15987 21.0564 2.25272 21.3935 1.17231C20.5205 1.70203 19.5559 2.08737 18.5254 2.29397C17.7042 1.39489 16.5302 0.833374 15.2312 0.833374C12.7402 0.833374 10.7193 2.90567 10.7193 5.46145C10.7193 5.82428 10.758 6.17645 10.8355 6.51556C7.08452 6.32203 3.75942 4.48142 1.53175 1.67814C1.14314 2.36409 0.920906 3.15987 0.920906 4.00739C0.920906 5.61236 1.71772 7.02912 2.92892 7.85945C2.19038 7.83694 1.49291 7.62639 0.883437 7.28212V7.33901C0.883437 9.58216 2.43942 11.4532 4.50553 11.877C4.12723 11.9857 3.72814 12.04 3.31616 12.04C3.02569 12.04 2.74158 12.0121 2.46641 11.9578C3.04098 13.7958 4.7068 15.1346 6.6825 15.1703C5.13803 16.4125 3.19086 17.1526 1.07697 17.1526C0.712766 17.1526 0.352516 17.1314 0 17.089C1.9977 18.3999 4.37112 19.1666 6.91883 19.1666C15.2219 19.1666 19.7608 12.1152 19.7608 5.99891C19.7608 5.79764 19.7569 5.59637 19.7491 5.39906C20.6315 4.74628 21.3972 3.93194 22.0003 3.00364Z"
                      fill="#2563eb
"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="rounded-md border-[0.1rem] border-black/20 dark:bg-black/50 p-1 w-9 h-9"
              >
                <a href="" class="bg-gray-300"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    style="fill: #2563eb; transform: ; msfilter: "
                  >
                    <path
                      d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </nav>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <!-- <dark-mode :dark="dark" @on-change="dark = $event">{{dark}}</dark-mode> -->
</template>

<script setup>
import { ref } from "@vue/reactivity";

const dark = ref(true);

function ok() {
  dark.value = !dark.value;
}
</script>

<style scoped>
.peeek {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.slider {
  animation-name: move;
  animation-duration: 0.5s;
}

@keyframes move {
  from {
    right: -600px;
  }

  to {
    right: 0px;
  }
}
</style>
