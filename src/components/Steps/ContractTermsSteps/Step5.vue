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
        <li class="flex items-center bg-dark-pink text-white p-2">
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
        <li class="flex items-center text-white bg-maroon p-2 dark:text-blue-500">
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
              Employment Relationship
            </h4>

            <p class="text-sm">
              The Parties agree that the relationship between the employee and the
              caregiver is the following
            </p>
          </div>
          <div>
            <div class="mb-2">
              <Radio :options="employmentRelationshipOptions" v-model="option" />
            </div>
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Emergency Contact
            </h4>
            <p class="text-sm">
              In case of an emergency, the following individuals should be contacted if
              the Employer is unavailable.
            </p>
          </div>
          <div class="mb-2 grid grid-cols-2 gap-5">
            <div>
              <TextBox v-model="name" type="text" placeholder="Jane Doe" label="Name" />
            </div>
            <div>
              <TextBox
                v-model="phoneNumber"
                type="number"
                placeholder="Enter phone number"
                label="Phone Number"
              />
            </div>
          </div>
          <div class="mb-2 grid grid-cols-2 gap-5">
            <div>
              <TextBox v-model="name" type="text" placeholder="Jane Doe" label="Name" />
            </div>
            <div>
              <TextBox
                v-model="phoneNumber"
                type="number"
                placeholder="Enter phone number"
                label="Phone Number"
              />
            </div>
          </div>
          <div class="mb-2 grid grid-cols-2 gap-5">
            <div>
              <TextBox v-model="name" type="text" placeholder="Jane Doe" label="Name" />
            </div>
            <div>
              <TextBox
                v-model="phoneNumber"
                type="number"
                placeholder="Enter phone number"
                label="Phone Number"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Additional Terms and Conditions
            </h4>
          </div>
          <div class="mb-2">
            <TextArea
              v-model="termsAndCondition"
              type="text"
              placeholder="Terms and Conditions"
              label="Enter any additional terms and conditions that may not have been covered."
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
      option: "",
      employmentRelationshipOptions: [
        {
          label:
            "Employer Obligations. The employer will withhold required Social Security and Medicare taxes from the Caregiver’s pay, along with income taxes per the Caregiver’s instructions on IRS Form W-4 and all other applicable taxes. All tax withholding shall be remitted to the State and Federal Tax Agencies on or before the household employment tax deadlines. Employer will provide the Care giver with IRS Form W-2 at the end of the calendar year, specifically, by Januray 31 of the following year",
          description: "",
          value: "option1",
        },
        {
          label:
            "Caregiver Obligations. The Caregiver, under the code of the Internal Revenue Service (IRS), is considered an independent contractor with the Caregiver solely responsible for payment of: Withholding FICA, Medicare, Social Security, or any other Federal and State withholding taxes from the Employer’s payments to the Caregiver. This includes, but is not limited to, Federal and State unemployment compensation and contributions on the Caregiver’s behalf while performing their services under this agreement.",
          value: "option2",
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
