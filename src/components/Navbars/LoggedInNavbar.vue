<template>
  <div>
    <div class="bg-white">
      <nav class="py-1">
        <div
          class="px-10 mx-auto md:flex md:justify-between cursor-pointer md:items-center"
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
            <li class="">
              <div v-if="userInfo.profileImage == ''">
                <router-link :to="{ name: 'CaregiverProfile' }"
                  ><VueAvatar :username="this.displayName"
                /></router-link>
              </div>
              <div v-else class="w-8 h-8 flex">
                <router-link :to="{ name: 'CaregiverProfile' }">
                  <img
                    class="rounded-full"
                    :src="userInfo.profileImage"
                    alt="Rounded avatar"
                  />
                </router-link>
              </div>
            </li>
            <li>
              <div>
                <div class="relative">
                  <!-- Dropdown toggle button -->
                  <button
                    @click="show = !show"
                    class="flex items-center p-2 text-indigo-100 bg-indigo-600 rounded-md"
                  >
                    <svg
                      class="w-5 h-5 text-indigo-100 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <!-- Dropdown menu -->
                  <div
                    v-show="show"
                    class="absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44"
                  >
                    <router-link
                      :to="{ name: 'Jobs' }"
                      class="block px-4 py-2 text-sm text-indigo-100 hover:text-primary hover:bg-primary hover:bg-opacity-10"
                    >
                      Jobs
                    </router-link>

                    <router-link
                      :to="{ name: 'Interviews' }"
                      class="block px-4 py-2 text-sm text-indigo-100 hover:text-primary hover:bg-primary hover:bg-opacity-10"
                    >
                      Interviews
                    </router-link>
                    <router-link
                      :to="{ name: 'Payments' }"
                      class="block px-4 py-2 text-sm text-indigo-100 hover:text-primary hover:bg-primary hover:bg-opacity-10"
                    >
                      Payment
                    </router-link>
                    <router-link
                      :to="{ name: 'Settings' }"
                      class="block px-4 py-2 text-sm text-indigo-100 hover:text-primary hover:bg-primary hover:bg-opacity-10"
                    >
                      Settings
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!---Loader-->
        <transition name="fade" mode="out-in">
          <div v-if="showAlert" class="relative h-0 w-9/12 mx-auto drop-shadow-xl">
            <div class="sticky inset-x-0 top-0">
              <Alert
                @click="closeAlert"
                :typeOfAlert="typeOfAlert"
                :message="alertMessage"
                :bulkMessage="alertBulkMessage"
                :head="alertTitle"
              />
            </div>
          </div>
        </transition>
        <Loader v-if="loading || loadingJobs || loadingInterviews" />
      </nav>
    </div>

    <!-- Right elements -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import logo from "/src/assets/logo.svg";
import SearchBox from "/src/components/SearchBox.vue";
import VueAvatar from "@webzlodimir/vue-avatar";
import "@webzlodimir/vue-avatar/dist/style.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "/src/router";
import Loader from "/src/components/loaders/Loader.vue";
import Alert from "/src/components/Alert.vue";

export default {
  data() {
    return {
      showMenu: false,
      show: false,
      logo: logo,
      displayName: "Jane Doe ",
      character: "",
      showAlert: false,
      typeOfAlert: "Info",
      alertTitle: "Alert",
      alertMessage: "",
      alertBulkMessage: "",
    };
  },
  components: { Loader, Alert, SearchBox, VueAvatar },
  computed: {
    ...mapGetters([
      "userInfo",
      "loading",
      "success",
      "error",
      "loadingJobs",
      "successJobs",
      "errorJobs",
      "loadingInterviews",
      "successInterviews",
      "errorInterviews",
    ]),
  },
  created() {
    this.getUserByFirebase();
  },

  methods: {
    ...mapActions(["getUserByFirebase"]),

    logout() {
      firebase.auth().signOut();
      //localStorage.setItem("isLoggedIn", false);
      localStorage.clear();
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
    closeAlert() {
      this.showAlert = false;
    },
  },
  mounted() {
    this.getAuthState();
  },
  watch: {
    success: function (val) {
      if (val) {
        this.alertTitle = "Success";
        this.typeOfAlert = "Success";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    error: function (val) {
      if (val) {
        this.alertTitle = "Error";
        this.typeOfAlert = "Danger";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    successJobs: function (val) {
      if (val) {
        this.alertTitle = "Success";
        this.typeOfAlert = "Success";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    errorJobs: function (val) {
      if (val) {
        this.alertTitle = "Error";
        this.typeOfAlert = "Danger";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    successInterviews: function (val) {
      if (val) {
        this.alertTitle = "Success";
        this.typeOfAlert = "Success";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    errorInterviews: function (val) {
      if (val) {
        this.alertTitle = "Error";
        this.typeOfAlert = "Danger";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
  },
};
</script>

<style scoped>
/* Enter Classes */
.fade-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active {
  transition: all 0.5s ease;
}

/* Leave classes */
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.fade-leave-active {
  transition: all 0.5s ease;
}
img {
  width: 60px;
}
.toggle {
  cursor: pointer;
}
.close {
  background: white;
  border: 0;
  cursor: pointer;
  margin: 5px;
}
.right-drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: 0; /* initially */
  overflow: hidden;
  height: 100vh;
  padding-left: 0; /* initially */
  border-left: 1px solid whitesmoke;
  background: white;
  z-index: 200;
  transition: all 0.2s;
}
</style>
