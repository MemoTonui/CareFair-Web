<template>
  <div class="grid justify-center items-center my-10">
    <div>
      <ol
        class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4"
      >
        <li class="flex items-center bg-primary text-white p-2 dark:text-blue-500">
          <span
            class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
          >
            1
          </span>
          <span class="hidden sm:inline-flex"> Profile <span> Setup</span></span>
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li class="flex items-center bg-secondary text-white p-2">
          <span
            class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
          >
            2
          </span>
          <span class="hidden sm:inline-flex">Experience</span>

          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li class="flex items-center bg-light-green text-white p-2">
          <span
            class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
          >
            3
          </span>
          <span class="hidden sm:inline-flex"> Charges</span>

          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li class="flex items-center bg-dark-pink text-white p-2">
          <span
            class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
          >
            4
          </span>
          <span class="hidden sm:inline-flex">Location</span>

          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li class="flex items-center dark:text-blue-500 text-white p-2 bg-maroon">
          <span
            class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
          >
            5
          </span>
          <span class="hidden sm:inline-flex">
            Upload <span class="sm:inline-flex"> Picture</span></span
          >
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 sm:ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </li>
      </ol>
    </div>
    <div class="m-10">
      <div class="">
        <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-2 pb-1">
          Upload Profile Image
        </h4>

        <p class="text-sm">
          Upload a picture of yourself showing your face to your shoulder length
        </p>
      </div>
      <form class="my-10 flex justify-center items-center">
        <div class="mb-2">
          <ImageUpload />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

import TextBox from "/src/components/TextBox.vue";
import TextArea from "/src/components/TextArea.vue";
import Password from "/src/components/Password.vue";
import CheckBox from "/src/components/CheckBox.vue";
import ActionButton from "/src/components/ActionButton.vue";
import logo from "/src/assets/logo.svg";
import Alert from "/src/components/Alert.vue";
import Loader from "/src/components/loaders/Loader.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "/src/router";
import CheckBoxList from "../CheckBoxList.vue";
import Availability from "../Availability.vue";
import ImageUpload from "../ImageUpload.vue";

export default {
  name: "Profile",
  components: {
    TextBox,
    CheckBox,
    ActionButton,
    Alert,
    Loader,
    Password,
    TextArea,
    CheckBoxList,
    Availability,
    ImageUpload,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["editUserProfile"]),
    changeUserProfileAccount() {
      this.editUserProfile({
        permanentAddress: this.address,
        country: this.country,
        state: this.state,
        city: this.city,
        zipCode: this.zip_code,
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
