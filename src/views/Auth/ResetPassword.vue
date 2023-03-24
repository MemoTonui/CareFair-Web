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
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="lg:w-5/12 px-4 md:px-0 justify-center">
        <div class="md:p-12 md:mx-2">
          <div class="block bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3">
            <div class="">
              <h4 class="text-3xl font-semibold mt-1 pb-1">Set New Password</h4>
              <p class="text-sm my-1">Set a new password here!</p>
            </div>
            <form class="grid justify-center mt-10">
              <div class="mb-4">
                <TextBox
                  v-model="password"
                  type="password"
                  placeholder="Enter Password"
                  label="Password"
                />
              </div>
              <div class="mb-4">
                <TextBox
                  v-model="password_confirmation"
                  type="password"
                  placeholder="Enter Confirm Password"
                  label="Confirm Password"
                />
              </div>
              <div class="pt-1 mb-4 pb-1">
                <ActionButton text="Submit" @click.prevent="handleResetPassword" />
              </div>
              <router-link :to="{ name: 'LogIn' }">
                <p class="text-xs text-center mb-12">
                  <span class="text-primary underline">Back to Login</span>
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
import TextBox from "/src/components/TextBox.vue";
import ActionButton from "/src/components/ActionButton.vue";
import logoUrl from "/src/assets/logo.svg";
import Alert from "/src/components/Alert.vue";
import Loader from "/src/components/Loader.vue";

export default {
  name: "ForgotPassword",
  components: { TextBox, ActionButton, Alert, Loader },
  data() {
    return {
      logoUrl: logoUrl,
      reset_code: "",
      password: "",
      password_confirmation: "",
      showAlert: false,
      typeOfAlert: "Info",
      alertTitle: "Alert",
      alertMessage: "",
      alertBulkMessage: "",
    };
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
