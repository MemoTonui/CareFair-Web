<template>
  <div>
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
          <span class="hidden sm:inline-flex"> Profile <span>Setup</span></span>
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
        <li class="flex items-center text-white p-2 bg-secondary">
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
        <li class="flex items-center text-white p-2 bg-dark-pink">
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
        <li class="flex items-center text-black dark:text-blue-500">
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
        <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-2 pb-1">Location</h4>

        <p class="text-sm">Let us know where you are working from</p>
      </div>
      <form class="my-10">
        <div class="">
          <div class="mb-2">
            <TextBox
              v-model="address"
              type="text"
              placeholder="E.g 12th Street"
              label="Address"
            />
          </div>
          <div class="mb-2">
            <label for="textBox" class="form-label text-xs inline-block my-2 text-black"
              >Country</label
            >
            <country-select
              class="form-control block w-full px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              v-model="country"
              :country="country"
              topCountry="US"
            />
            <!---region-select
              class="form-control block w-full px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              v-model="region"
              :country="country"
              :region="region"
            /-->
          </div>
          <div class="mb-2">
            <TextBox
              v-model="state"
              type="text"
              placeholder="Select State"
              label="State"
            />
          </div>
          <div class="mb-2">
            <TextBox v-model="city" type="text" placeholder="Enter City" label="City" />
          </div>
        </div>
        <div class="gap-4">
          <div class="mb-2">
            <TextBox
              v-model="zip_code"
              type="text"
              placeholder="E.g 00200"
              label="Zip Code"
            />
          </div>
        </div>
        <div class="pt-1 mb-5 mt-2 pb-1 flex justify-between">
          <div></div>
          <div>
            <ActionButton text="Save" @click.prevent="changeUserProfileAccount" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

import TextBox from "/src/components/TextBox2.vue";
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
  },
  data() {
    return {
      address: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    };
  },
  created() {
    this.getUserByFirebase();
    if (this.userInfo) {
      this.address = this.userInfo.permanentAddress;
      this.country = this.userInfo.country;
      this.state = this.userInfo.state;
      this.city = this.userInfo.city;
      this.zip_code = this.userInfo.zipCode;
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["editUserProfile", "getUserByFirebase"]),
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
