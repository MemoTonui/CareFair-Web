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
            <span class="material-icons-outlined"> home </span>
          </li>
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <span class="material-icons-outlined"> notifications </span>
          </li>

          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <span class="material-icons-outlined"> search </span>
          </li>
          <li class="text-sm font-bold text-black hover:text-primary hover:underline">
            <router-link :to="{ name: 'FAQs' }">
              <span class="material-icons-outlined"> help_outline </span>
            </router-link>
          </li>
          <li
            @click="logout"
            class="text-sm font-bold text-black hover:text-primary hover:underline"
          >
            <span class="material-icons-outlined">power_settings_new </span>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <VueAvatar :username="this.displayName" />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import logo from "/src/assets/logo.svg";
import SearchBox from "/src/components/SearchBox.vue";
import VueAvatar from "@webzlodimir/vue-avatar";
import "@webzlodimir/vue-avatar/dist/style.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "/src/router";

export default {
  components: { SearchBox, VueAvatar },
  data() {
    return {
      showMenu: false,
      logo: logo,
      displayName: "Jane Doe ",
      character: "",
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      localStorage.setItem("isLoggedIn", false);
      router.push({ name: "LogIn" });
    },
    getAuthState() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("My User", user.email.charAt(0));
          this.character = user.email.charAt(0);
          console.log(this.character.toUpperCase());
          this.displayName = this.character.toUpperCase();
        } else {
          console.log("No User");
        }
      });
    },
  },
  mounted() {
    this.getAuthState();
  },
};
</script>
