<template>
  <div class="mx-auto container">
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
        <li class="flex items-center">
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
        <li class="flex items-center">
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
        <li class="flex items-center">
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
      <div class="my-4">
        <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
          Your Profile
        </h4>

        <p class="text-sm">
          Share a bit about your self on your profile. This is what will appear when a
          care receiver finds your profile
        </p>
      </div>
      <form class="my-10">
        <div class="mb-2">
          <p class="font-semibold my-1">Short Caption</p>
          <TextBox
            v-model="caption"
            type="text"
            placeholder="Eg. I love living"
            label="Give a short statement that describes you know"
          />
        </div>
        <div class="mb-2">
          <p class="font-semibold my-1">Bio</p>

          <TextArea
            v-model="bio"
            type="text"
            placeholder="Eg. I love living"
            label="Give us a summary of who you are. "
          />
        </div>
        <div class="my-4">
          <p class="font-semibold my-2">Availability</p>
          <p class="text-xs my-2">Check the days that you are available.</p>
          <div class="my-2">
            <Availability />
          </div>
        </div>

        <div class="my-4">
          <p class="font-semibold my-2">More Options</p>
          <p class="text-sm my-1">Please select what is applicable to you</p>
          <CheckBoxList
            :options="moreOptions"
            v-model:value="selectedOptions"
            class="p-3"
          />
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
import TextArea from "/src/components/TextArea2.vue";
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
    caption: "",
    bio: "",
  },
  data() {
    return {
      selectedOptions: [],
      canHelpInEducation: false,
      ownsCar: false,
      availableAllDay: false,
      availableBeforeAndAfterSchool: false,
      nannyShare: false,
      specialNeeds: false,
      moreOptions: [
        { label: "Can provide educational  assistance", value: "canHelpInEducation" },
        { label: "Sitter owns a car", value: "ownsCar" },

        {
          label: "Generally available mornings, afternoons, evenings, late-nights",
          value: "availableAllDay",
        },
        {
          label: "Before and after school care availability",
          value: "availableBeforeAndAfterSchool",
        },
        { label: "You offer nanny share services", value: "nannyShare" },
        {
          label: "You have experience with special needs individuals",
          value: "specialNeeds",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["editUserProfile"]),
    changeUserProfileAccount() {
      this.selectedOptions.forEach((option) => {
        if (option == "canHelpInEducation") {
          this.canHelpInEducation = true;
        }
        if (option == "ownsCar") {
          this.ownsCar = true;
        }
        if (option == "availableAllDay") {
          this.availableAllDay = true;
        }
        if (option == "availableBeforeAndAfterSchool") {
          this.availableBeforeAndAfterSchool = true;
        }
        if (option == "nannyShare") {
          this.nannyShare = true;
        }
        if (option == "specialNeeds") {
          this.specialNeeds = true;
        }
      });
      this.editUserProfile({
        about: this.bio,
        shortCaption: this.caption,
        canHelpInEducation: this.canHelpInEducation,
        ownsCar: this.ownsCar,
        availableAllDay: this.availableAllDay,
        availableBeforeAndAfterSchool: this.availableBeforeAndAfterSchool,
        // nannyShare: this.nannyShare,
        specialNeeds: this.specialNeeds,
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
