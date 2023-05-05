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
      adultDayCareCenters: false,
      assistedLivingFacilities: false,
      familyCaregiver: false,
      hospiceCaregiver: false,
      inHomeCaregiver: false,
      independentCaregiver: false,
      informalCaregiver: false,
      nursingHome: false,
      spotter: false,
      privateDutyCaregiver: false,
      professionalCaregiver: false,
      virtualCaregiver: false,
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
        if (skill == "adultDayCareCenters") {
          this.adultDayCareCenters = true;
        }
        if (skill == "assistedLivingFacilities") {
          this.assistedLivingFacilities = true;
        }
        if (skill == "familyCaregiver") {
          this.familyCaregiver = true;
        }
        if (skill == "hospiceCaregiver") {
          this.hospiceCaregiver = true;
        }
        if (skill == "inHomeCaregiver") {
          this.inHomeCaregiver = true;
        }
        if (skill == "independentCaregiver") {
          this.postPartumDoula = true;
        }
        if (skill == "spotter") {
          this.spotter = true;
        }
        if (skill == "informalCaregiver") {
          this.informalCaregiver = true;
        }
        if (skill == "nursingHome") {
          this.nursingHome = true;
        }
        if (skill == "virtualCaregiver") {
          this.virtualCaregiver = true;
        }
        if (skill == "privateDutyCaregiver") {
          this.privateDutyCaregiver = true;
        }
        if (skill == "professionalCaregiver") {
          this.professionalCaregiver = true;
        }
      });
      this.editUserProfile({
        careType: "seniorCare",
        skillset: {
          seniorCare: {
            adultDayCareCenters: this.adultDayCareCenters,
            assistedLivingFacilities: this.assistedLivingFacilities,
            familyCaregiver: this.familyCaregiver,
            hospiceCaregiver: this.hospiceCaregiver,
            inHomeCaregiver: this.inHomeCaregiver,
            independentCaregiver: this.independentCaregiver,
            spotter: this.spotter,
            informalCaregiver: this.informalCaregiver,
            nursingHome: this.nursingHome,
            virtualCaregiver: this.virtualCaregiver,
            professionalCaregiver: this.professionalCaregiver,
            privateDutyCaregiver: this.privateDutyCaregiver,
          },
        },
      });
      router.push({ name: "CaregiverAccountSetupProcess" });
    },
  },
};
</script>

<style></style>
