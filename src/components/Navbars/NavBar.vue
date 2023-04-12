<template>
  <div>
    <div class="bg-white">
      <nav
        class="container px-14 py-1 mx-auto md:flex md:justify-between cursor-pointer md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          >
            <img class="w-32 h-20" :src="logo" />
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <router-link :to="{ name: 'MainWebPage' }">
              <span class="material-icons-outlined"> home </span>
            </router-link>
          </li>
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <span class="material-icons-outlined"> search </span>
          </li>
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <router-link :to="{ name: 'FAQs' }">
              <span class="material-icons-outlined"> help_outline </span>
            </router-link>
          </li>
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <router-link :to="{ name: 'LogIn' }"> Login </router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link :to="{ name: 'SignUp' }">
              <a
                class="inline-block px-5 py-2 tracking-wider mr-1.5 border-2 border-primary bg-primary text-white font-semibold text-sm hover:text-primary leading-snug rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                >Sign Up</a
              >
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import logo from "/src/assets/logo.svg";
import SearchBox from "/src/components/SearchBox.vue";
export default {
  components: { SearchBox },
  data() {
    return {
      showMenu: false,
      logo: logo,
    };
  },
};
</script>
