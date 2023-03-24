<template>
  <section class="h-full gradient-form md:h-screen">
    <div class="bg-white">
      <nav
        class="container px-14 py-1 mx-auto md:flex md:justify-between cursor-pointer md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          >
            <img class="w-16 h-16" :src="logo" />
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
      </nav>
    </div>
    <div class="-mt-16 absolute">
      <Loader v-if="loading" />
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="showAlert" class="relative h-0 w-9/12 mx-auto top-8 drop-shadow-xl">
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
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div class="xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-8/12 mb-12 md:mb-0 justify-center">
        <div class="md:p-12 md:mx-2">
          <div class="block bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3">
            <div class="">
              <h4 class="text-2xl font-bold text-black md:text-3xl mt-1 mb-4 pb-1">
                Welcome back !
              </h4>

              <h5 class="text-sm">Please fill in the details below to login</h5>
            </div>
            <form class="grid justify-center my-10">
              <div class="mb-2">
                <TextBox
                  v-model="email"
                  type="email"
                  placeholder="janedoe@gmail.com"
                  label="Email"
                />
              </div>
              <div class="mb-2">
                <Password v-model="password" />
                <router-link :to="{ name: 'ForgotPassword' }">
                  <div class="flex justify-end cursor-pointer hover:text-primary">
                    <span class="text-xs text-right text-black">Forgot password?</span>
                  </div>
                </router-link>
              </div>

              <div class="pt-1 mb-5 mt-2 pb-1">
                <ActionButton text="Login" @click.prevent="handleSignIn" />
              </div>
              <router-link :to="{ name: 'SignUp' }">
                <p class="text-xs text-center mb-12">
                  Don't have an Account?
                  <span class="text-primary underline">Create Account</span>
                </p>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "/src/router";
import TextBox from "/src/components/TextBox.vue";
import Password from "/src/components/Password.vue";
import CheckBox from "/src/components/CheckBox.vue";
import ActionButton from "/src/components/ActionButton.vue";
import logo from "/src/assets/logo.svg";
import Alert from "/src/components/Alert.vue";
import Loader from "/src/components/Loader.vue";

export default {
  name: "SignIn",
  components: { TextBox, CheckBox, ActionButton, Alert, Loader, Password },
  data() {
    return {
      logo: logo,
      name: "",
      email: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
      value: "Yes",
      showAlert: false,
      typeOfAlert: "Info",
      alertTitle: "Alert",
      alertMessage: "",
      alertBulkMessage: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["userInfo", "loading", "error", "success"]),
    ...mapState(["isLoggedIn"]),
  },
  watch: {
    success: function (val) {
      if (val) {
        this.alertTitle = "Auth Action Success";
        this.typeOfAlert = "Success";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
    error: function (val) {
      if (val) {
        this.alertTitle = "Authentication Error";
        this.typeOfAlert = "Danger";
        this.alertMessage = val;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
      }
    },
  },
  methods: {
    handleSignIn() {
      const requiredEmail = this.email;
      const requiredPassword = this.password;
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(requiredEmail, requiredPassword) // THIS LINE CHANGED
        .then((data) => {
          console.log("Successfully logged in!");
          localStorage.setItem("isLoggedIn", true);
          this.loading = false;
          router.replace({ name: "MainWebPage" });
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.loading = false;
              this.alertTitle = "Invalid email";
              this.typeOfAlert = "Danger";
              this.alertMessage = error.code;
              this.showAlert = true;
              setTimeout(() => (this.showAlert = false), 5000);
              break;
            case "auth/user-not-found":
              this.loading = false;

              this.alertTitle = "No account with that email was found";
              this.typeOfAlert = "Danger";
              this.alertMessage = error.code;
              this.showAlert = true;
              setTimeout(() => (this.showAlert = false), 5000);
              break;
            case "auth/wrong-password":
              this.loading = false;

              this.alertTitle = "Incorrect Password";
              this.typeOfAlert = "Danger";
              this.alertMessage = error.code;
              this.showAlert = true;
              setTimeout(() => (this.showAlert = false), 5000);
              break;
            default:
              this.loading = false;

              this.alertTitle = "Email or password was incorrect";
              this.typeOfAlert = "Danger";
              this.alertMessage = error.code;
              this.showAlert = true;
              setTimeout(() => (this.showAlert = false), 5000);
              break;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 6rem;
}

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
h4 {
  font-family: "Gentium Book Plus", serif;
}
</style>
