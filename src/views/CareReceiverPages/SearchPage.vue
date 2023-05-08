<template>
  <main>
    <div class="container">
      <div class="bg-primary bg-opacity-5 p-3 m-10 justify-center">
        <div class="grid col-span-1 md:grid-cols-3 gap-3">
          <TextBox
            type="text"
            placeholder="Zip Code"
            label="Enter the ZIP Code"
            v-model="zipCode"
          />

          <TextBox
            type="number"
            placeholder="$ per hour"
            label="Minimum Rate"
            v-model="minimumRate"
          />
          <TextBox
            type="number"
            placeholder="$ per hour"
            label="Maximum Rate"
            v-model="maximumRate"
          />
        </div>
        <div class="grid col-span-1 md:grid-cols-3 gap-3">
          <TextBox
            type="number"
            placeholder="Experience"
            label="Minimum Experience in years"
            v-model="minimumExperience"
          />

          <div>
            <CheckBoxList
              :options="selectCareType"
              v-model:value="careType"
              class="p-3"
              label="Select the Service you need:"
            />
          </div>
          <div>
            <TagInput
              label="Enter your Preferred Languages"
              placeholder="Preferred Languages"
              :tags="tags"
              v-model="tags"
            />
          </div>
        </div>
        <div class="flex justify-between my-5">
          <div></div>
          <div><action-button text="Apply Filter" /></div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-5 container p-4 m-10">
        <div class="col-span-1 max-h-screen overflow-y-auto p-2">
          <div v-for="user in caregivers" :key="user._id">
            <search-user-card
              :careType="user.careType"
              :city="user.city"
              :country="user.country"
              :img="user.profileImage"
              :firstName="user.firstName"
              :lastName="user.lastName"
              :rate="5"
              :verified="user.verified"
              :charges="user.chargePerHour"
              @click="handleGetUserById(user._id)"
            />
          </div>
        </div>
        <div class="col-span-3">
          <div v-if="Object.keys(userIdInfo).length !== 0">
            <SearchUserDetails
              :firstName="userIdInfo.firstName"
              :lastName="userIdInfo.lastName"
              :careType="userIdInfo.careType"
              :city="userIdInfo.city"
              :country="userIdInfo.country"
              :bio="userIdInfo.about"
              :charges="userIdInfo.chargePerHour"
              :education="userIdInfo.education"
              :previousWorkExperience="userIdInfo.previousWorkExperience"
              :rating="userIdInfo.rating"
            />
          </div>
          <div
            v-else
            class="flex justify-center shadow-md items-center p-10 text-border text-md"
          >
            CLICK ON A USER TO VIEW THE DETAILS
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavBar from "/src/components/Navbars/NavBar.vue";
import LoggedInNavbar from "/src/components/Navbars/LoggedInNavbar.vue";
import Footer from "/src/components/Footer.vue";
import TextBox from "../../components/TextBox2.vue";
import CheckBoxList from "/src/components/VerticalCheckboxList.vue";
import TagInput from "../../components/TagInput.vue";
import ActionButton from "../../components/ActionButton.vue";
import SearchUserCard from "../../components/cards/SearchUserCard.vue";
import SearchUserDetails from "../../components/cards/SearchUserDetails.vue";

export default {
  components: {
    NavBar,
    Footer,
    LoggedInNavbar,
    TextBox,
    CheckBoxList,
    TagInput,
    ActionButton,
    SearchUserCard,
    SearchUserDetails,
  },
  data() {
    return {
      isLoggedIn: false,
      zipCode: "",
      minimumRate: 0,
      maximumRate: 0,
      minimumExperience: 0,
      selectCareType: [
        { label: "Child Care", value: "childCare" },
        { label: "Pet Care", value: "petCare" },
        { label: "Senior Care", value: "seniorCare" },
      ],
      careType: [],
      tags: ["English"],
    };
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("is Logged In ", this.isLoggedIn);
  },
  updated() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  },
  methods: {
    ...mapActions(["getCaregivers", "getUserById"]),
    handleGetUserById(userId) {
      this.getUserById({
        id: userId,
      });
    },
  },
  computed: {
    ...mapGetters(["caregivers", "userIdInfo"]),
  },
  created() {
    this.getCaregivers();
  },
};
</script>

<style></style>
