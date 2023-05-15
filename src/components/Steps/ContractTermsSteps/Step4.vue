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
              Time Off
            </h4>

            <p class="text-sm">Enter the terms and duration of the days off</p>
          </div>
          <div>
            <div class="mt-4">
              <h4 class="text-md font-bold text-black md:text-lg mt-1 mb-1 pb-1">
                Compensation
              </h4>
            </div>
            <div class="mb-2">
              <Radio :options="compensationOptions" v-model="timeOffCompensation" />
            </div>

            <div class="mb-2">
              <div class="mt-4">
                <h4 class="text-md font-bold text-black md:text-lg mt-1 mb-1 pb-1">
                  Sick Leave
                </h4>
              </div>

              <TextBox
                v-model="sickLeaveDays"
                type="number"
                placeholder="40 days/year"
                label="Enter the number of sick days caregiver can have per year."
              />
            </div>
            <div class="mb-2 gap-5">
              <div class="mt-4">
                <h4 class="text-md font-bold text-black md:text-lg mt-1 mb-1 pb-1">
                  Vacation
                </h4>
              </div>
              <div>
                <TextBox
                  v-model="vacationDays"
                  type="number"
                  placeholder="10 Days/ year"
                  label="Enter the number of vacation days caregiver can have per year."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="my-4">
            <h4 class="text-2xl font-bold text-black md:text-2xl mt-1 mb-1 pb-1">
              Holidays
            </h4>
            <p class="text-sm">
              Enter the terms of compensation during holidays and the holidays that the
              caregiver can go on.
            </p>
          </div>
          <div class="mb-2">
            <div class="mb-2">
              <Radio :options="compensationOptions" v-model="holidayCompensation" />
            </div>

            <div class="my-4">
              <p class="font-semibold my-2">Select the holidays user can go on</p>
              <CheckBoxList
                :options="holidayOptions"
                v-model:value="selectedOptions"
                class="p-3"
              />
            </div>
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
import CheckBoxList from "../../CheckBoxList.vue";

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
    CheckBoxList,
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
      vacationDays: "",
      sickLeaveDays: "",
      compensation: "",
      compensationOptions: [
        { label: "Paid", value: "paid" },
        { label: "Unpaid", value: "unpaid" },
      ],
      holidayOptions: [
        { label: "New Year’s Day", value: "newYears" },
        { label: "Martin Luther King Jr. Day", value: "martinLuther" },

        {
          label: "Memorial Day",
          value: "memorialDay",
        },
        {
          label: "Independence Day",
          value: "independenceDay",
        },
        { label: "Labor day", value: "laborDay" },
        {
          label: "Veterans Day",
          value: "veteransDay",
        },
        {
          label: "Thanksgiving",
          value: "thanksgiving",
        },
        {
          label: "Christmas Day",
          value: "christmasDay",
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
