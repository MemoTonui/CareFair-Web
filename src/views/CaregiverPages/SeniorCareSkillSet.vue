<template>
  <main>
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div
        class="xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-8/12 sm:w-4/12 mb-12 md:mb-0 flex items-center justify-center"
      >
        <div class="md:p-12 md:mx-2">
          <div
            class="block bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3 m-5"
          >
            <div class="">
              <h5 class="uppercase text-xs text-primary">Senior Care</h5>
              <h4 class="text-2xl font-bold text-black md:text-3xl mt-1 mb-4 pb-1">
                What best describes your skill set?
              </h4>

              <p class="text-sm">
                Select the skills that best describe the nature of your services
              </p>
            </div>
            <div class="md:flex gap-10 my-2 sm:grid-cols-1">
              <CheckBoxList
                :options="selectSkills"
                v-model:value="skillset"
                class="p-3"
              />
            </div>
            <div class="flex justify-between mt-5">
              <div></div>
              <div>
                <ActionButton text="Proceed" @click.prevent="changeUserProfileAccount" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import router from "/src/router";

import CheckBoxList from "../../components/CheckBoxList.vue";
import ActionButton from "../../components/ActionButton.vue";

export default {
  components: { CheckBoxList, ActionButton },
  data() {
    return {
      skillset: [],
      seniorCare: [],
      selectSkills: [
        { label: "In-Home Caregiver", value: "inHomeCaregiver" },
        { label: "Family Caregiver", value: "familyCaregiver" },
        { label: "Independent Caregiver", value: "independentCaregiver" },
        { label: "Private Duty Caregiver", value: "privateDutyCaregiver" },
        { label: "Informal Caregiver", value: "informalCaregiver" },
        { label: "Professional Caregiver", value: "professionalCaregiver" },
        { label: "Hospice Caregiver", value: "hospiceCaregiver" },
        { label: "Virtual Caregiver", value: "virtualCaregiver" },
        { label: "Adult Day Care Centers", value: "adultDayCareCenters" },
        { label: "Nursing Home", value: "nursingHome" },
        { label: "Assisted Living Facilities", value: "assistedLivingFacilities" },
        { label: "Spotter", value: "spotter" },
      ],
    };
  },
  methods: {
    ...mapActions(["editUserProfile"]),
    changeUserProfileAccount() {
      this.skillset.forEach((skill) => {
        this.seniorCare.push(skill);
      });
      this.editUserProfile({
        careType: "seniorCare",
        skillset: this.seniorCare,
      });
      console.log(this.seniorCare);
      router.push({ name: "CaregiverAccountSetupProcess" });
    },
  },
};
</script>

<style></style>
