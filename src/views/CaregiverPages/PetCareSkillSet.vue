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
              <h5 class="uppercase text-xs text-primary">Pet Care</h5>
              <h4 class="text-2xl font-bold text-black md:text-3xl mt-1 mb-4 pb-1">
                What best describes your skill set?
              </h4>

              <p class="text-sm">
                Select the skills that best describe the nature of your services
              </p>
            </div>
            <div class="md:flex my-2 sm:grid-cols-1">
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
      petCare: [],
      dogWalking: false,
      petSitting: false,
      petBoardingorKernelAssistant: false,
      dogGrooming: false,
      petTraining: false,
      veterinaryAcupuncurist: false,
      dogorCatBreederAssistant: false,
      veterinaryAssistant: false,
      spotter: false,
      selectSkills: [
        { label: "Dog Walking", value: "dogWalking" },
        { label: "Pet Sitting", value: "petSitting" },
        {
          label: "Pet Boarding or Kernel Assistant",
          value: "petBoardingorKernelAssistant",
        },
        { label: "Dog Grooming", value: "dogGrooming" },
        { label: "Pet Training", value: "petTraining" },
        { label: "Veterinary Acupuncurist", value: "veterinaryAcupuncurist" },
        {
          label: "Dog or Cat Breeder/ Assistant",
          value: "dogorCatBreederAssistant",
        },
        { label: "Veterinary Assistant", value: "veterinaryAssistant" },
        { label: "Spotter", value: "spotter" },
      ],
    };
  },
  methods: {
    ...mapActions(["editUserProfile"]),
    changeUserProfileAccount() {
      this.skillset.forEach((skill) => {
        if (skill == "dogWalking") {
          this.dogWalking = true;
        }
        if (skill == "dogGrooming") {
          this.dogGrooming = true;
        }
        if (skill == "dogorCatBreederAssistant") {
          this.dogorCatBreederAssistant = true;
        }
        if (skill == "petBoardingorKernelAssistant") {
          this.petBoardingorKernelAssistant = true;
        }
        if (skill == "petSitting") {
          this.petSitting = true;
        }
        if (skill == "petTraining") {
          this.petTraining = true;
        }
        if (skill == "spotter") {
          this.spotter = true;
        }
        if (skill == "veterinaryAcupuncurist") {
          this.veterinaryAcupuncurist = true;
        }
        if (skill == "veterinaryAssistant") {
          this.veterinaryAssistant = true;
        }
      });
      this.editUserProfile({
        careType: "petCare",
        skillset: {
          petCare: {
            dogWalking: this.dogWalking,
            dogGrooming: this.dogGrooming,
            dogorCatBreederAssistant: this.dogorCatBreederAssistant,
            petBoardingorKernelAssistant: this.petBoardingorKernelAssistant,
            petSitting: this.petSitting,
            petTraining: this.petTraining,
            spotter: this.spotter,
            veterinaryAcupuncurist: this.veterinaryAcupuncurist,
            veterinaryAssistant: this.veterinaryAssistant,
          },
        },
      });
      console.log(this.petCare);
      router.push({ name: "CaregiverAccountSetupProcess" });
    },
  },
};
</script>

<style></style>
