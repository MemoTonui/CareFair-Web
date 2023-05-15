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
        <li class="flex items-center bg-light-green text-white p-2">
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
              Compensation
            </h4>

            <p class="text-sm">Enter the expected compensation for the user.</p>
          </div>
          <div>
            <div class="mb-2">
              <TextBox
                v-model="ratesPerHour"
                type="text"
                placeholder="$"
                label="Rates per hour"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="mt-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Occurrence
            </h4>
          </div>
          <div class="mb-2">
            <radio :options="occurrenceOptions" v-model="occurrence" />
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Transportation
            </h4>
            <p class="text-sm">Transportation Details</p>
          </div>
          <div class="mb-2">
            <radio :options="transportationOptions" v-model="transportation" />
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Other Benefits
            </h4>
            <p class="text-sm">
              Select any other benefits you would like to provide to the caregiver
            </p>
          </div>
          <div class="mb-2">
            <check-list-text-area
              benefitPlaceholder="Describe ..."
              label="Select any other benefits you would like to provide to the caregiver"
              :options="benefitsOptions"
              v-model:value="selectedOptions"
            />
          </div>
        </div>

        <div class="pt-1 mb-5 mt-2 pb-1 flex justify-between">
          <div></div>
          <div>
            <ActionButton text="Save" />
          </div>
        </div>
      </form>
      {{ selectedOptions }}
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
import CheckListTextArea from "../../CheckListTextArea.vue";

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
    CheckListTextArea,
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
      occurrence: "",
      transportation: "",
      benefit: "",
      selectedOptions: [],
      occurrenceOptions: [
        {
          label: "",
          description: "Weekly",
          value: "weekly",
        },
        {
          label: "",
          description: "BiWeekly",
          value: "biweekly",
        },
        {
          label: "",
          description: "Monthly",
          value: "monthly",
        },
      ],
      transportationOptions: [
        {
          label: "",
          description: "Provide a Vehicle to the Caregiver",
          value: "weekly",
        },
        {
          label: "",
          description:
            "Reimburse the Care giver their transportation costs for any direct expenses",
          value: "biweekly",
        },
        {
          label: "",
          description:
            "Not provide reimbursement for any of the Caregiver’s transportation costs",
          value: "monthly",
        },
      ],
      benefitsOptions: [
        { label: "Health Insurance", value: "healthInsurance" },
        { label: "Public Transportation", value: "publicTransportation" },

        {
          label: "Parking",
          value: "parking",
        },
        {
          label: "College Tuition",
          value: "collegeTuition",
        },
        { label: "Mobile Phone", value: "mobilePhone" },
      ],
    };
  },
  created() {
    this.getUserByFirebase();
    if (this.userInfo) {
      this.fullName = this.userInfo.firstName + this.userInfo.lastName;
      this.email = this.userInfo.shortCaption;
      this.location = this.userInfo.city + this.userInfo.country;
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
