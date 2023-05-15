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
    <div class="m-4">
      <form class="my-10">
        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Care Receiver Details
            </h4>

            <p class="text-sm">
              Give us details about the individuals the caregiver takes care of.
            </p>
          </div>
          <div class="bg-primary bg-opacity-20">
            <div class="flex justify-between p-1">
              <div><span class="material-icons-outlined"> add </span></div>
              <div><span class="material-icons-outlined"> close </span></div>
            </div>
            <div class="grid grid-cols-2 gap-3 p-3">
              <div class="">
                <TextBox
                  v-model="careReceiverName"
                  type="text"
                  placeholder=""
                  label="What is the name of your?"
                />
              </div>
              <div>
                <TextBox
                  v-model="careReceiverAge"
                  type="number"
                  placeholder=""
                  label="Age"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Care Giver’s Responsibilities
            </h4>
          </div>
          <div class="mb-2">
            <TextArea
              v-model="responsibilities"
              type="text"
              placeholder="Responsibilities"
              label="The responsibilities of the care giver shall include:"
            />
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Accommodation
            </h4>
          </div>
          <div class="mb-2">
            <radio :options="accommodationOptions" v-model="accommodationOption" />
          </div>
        </div>

        <div class="pt-1 mb-5 mt-2 pb-1 flex justify-between">
          <div></div>
          <div>
            <ActionButton text="Save" />
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
import Radio from "../../Radio.vue";

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
    Radio,
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
      selectedDays: [],
      email: "",
      fullName: "",
      location: "",
      accommodationOption: "",
      accommodationOptions: [
        {
          label: "No Accommodation Provided",
          description:
            "The care giver acknowledges that they reside in separate housing from the employer and that the employer has made no intentions of providing housing to the caregiver.",
          value: "Sunday",
        },
        {
          label: "Accommodation Provided",
          description:
            "The care receiver agrees to provide housing to the care giver with no requirement to pay rent, utilities or any other expense or bill attributed to the residence.",
          value: "Monday",
        },
      ],
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
  created() {
    this.getUserByFirebase();
    if (this.userInfo) {
      this.fullName = this.userInfo.firstName + this.userInfo.lastName;
      this.email = this.userInfo.shortCaption;
      this.location = this.userInfo.city + this.userInfo.country;
      this.canHelpInEducation = this.userInfo.canHelpInEducation;
      this.ownsCar = this.userInfo.ownsCar;
      this.selectedDays = this.userInfo.availableDays;
      this.availableAllDay = this.userInfo.availableAllDay;
      this.availableBeforeAndAfterSchool = this.userInfo.availableBeforeAndAfterSchool;
      this.specialNeeds = this.userInfo.specialNeeds;
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["editUserProfile", "getUserByFirebase"]),
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
        availableDays: this.selectedDays,
        availableAllDay: this.availableAllDay,
        availableBeforeAndAfterSchool: this.availableBeforeAndAfterSchool,
        // nannyShare: this.nannyShare,
        specialNeeds: this.specialNeeds,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
h4 {
  font-family: "Gentium Book Plus", serif;
}
</style>
