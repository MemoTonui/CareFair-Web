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
    <div class="-mt-40 absolute">
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
    <div class="py-24 px-24 bg-white w-fit mx-auto text-center my-24 shadow-lg">
      <form>
        <h4 for="" class="font-semibold text-3xl">Check your email !</h4>
        <p class="my-6">
          We have sent a one time password to
          <span class="font-semibold">janedoe@gmail.com</span>
        </p>

        <div class="flex justify-center mt-10">
          <div style="display: flex; flex-direction: row">
            <OtpInput
              ref="otpInput"
              input-classes="otp-input"
              separator=" "
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
        </div>
        <input type="hidden" name="otp" />
        <div></div>
        <button @click="clearInput()" class="mt-6 flex text-right">Clear Input</button>
        <router-link :to="{ name: 'ResetPassword' }">
          <ActionButton class="mt-5" text="Verify" />
        </router-link>
        <div class="flex justify-between my-3">
          <div>
            <p class="text-xs text-center">
              Didn’t receive email?
              <span class="text-primary underline">Click to resend</span>
            </p>
          </div>
          <div>
            <router-link :to="{ name: 'LogIn' }">
              <p class="text-xs text-center mb-12">
                <span class="text-primary underline">Back to Login</span>
              </p>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ActionButton from "/src/components/ActionButton.vue";
import OtpInput from "vue3-otp-input";
import Alert from "/src/components/Alert.vue";
import Loader from "/src/components/loaders/Loader.vue";
import logo from "/src/assets/logo.svg";

export default {
  name: "OTP",
  components: { OtpInput, ActionButton, Alert, Loader },
  data() {
    return {
      email: "",
      otp_code: "",
      showAlert: false,
      typeOfAlert: "Info",
      alertTitle: "Alert",
      alertMessage: "",
      alertBulkMessage: "",
      logo: logo,
    };
  },
  setup() {
    const otpInput = null;

    const clearInput = () => {
      otpInput.value.clearInput();
    };

    return { clearInput, otpInput };
  },
};
</script>

<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
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
