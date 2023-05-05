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
              <h5 class="uppercase text-xs text-primary">Child Care</h5>
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
      childCare: [],
      educationSupportNanny: false,
      laborDoula: false,
      nannyEducatorTutor: false,
      nannyHouseManager: false,
      newbornCareSpecialist: false,
      postPartumDoula: false,
      traditionalNanny: false,
      spotter: false,
      travelingNanny: false,
      selectSkills: [
        { label: "Traditional Nanny", value: "traditionalNanny" },
        { label: "Nanny House Manager", value: "nannyHouseManager" },
        { label: "Traveling Nanny", value: "travelingNanny" },
        { label: "Newborn Care Specialist", value: "newbornCareSpecialist" },
        { label: "Labor Doula", value: "laborDoula" },
        { label: "Post Partum Doula", value: "postPartumDoula" },
        { label: "Education Support Nanny", value: "educationSupportNanny" },
        { label: "Nanny Educator Tutor", value: "nannyEducatorTutor" },
        { label: "Spotter", value: "spotter" },
      ],
    };
  },

  methods: {
    ...mapActions(["editUserProfile"]),
    changeUserProfileAccount() {
      this.skillset.forEach((skill) => {
        if (skill == "educationSupportNanny") {
          this.educationSupportNanny = true;
        }
        if (skill == "laborDoula") {
          this.laborDoula = true;
        }
        if (skill == "nannyEducatorTutor") {
          this.nannyEducatorTutor = true;
        }
        if (skill == "nannyHouseManager") {
          this.nannyHouseManager = true;
        }
        if (skill == "newbornCareSpecialist") {
          this.newbornCareSpecialist = true;
        }
        if (skill == "postPartumDoula") {
          this.postPartumDoula = true;
        }
        if (skill == "spotter") {
          this.spotter = true;
        }
        if (skill == "traditionalNanny") {
          this.traditionalNanny = true;
        }
        if (skill == "travelingNanny") {
          this.travelingNanny = true;
        }
      });
      this.editUserProfile({
        careType: "childCare",
        skillset: {
          childCare: {
            educationSupportNanny: this.educationSupportNanny,
            laborDoula: this.laborDoula,
            nannyEducatorTutor: this.nannyEducatorTutor,
            nannyHouseManager: this.nannyHouseManager,
            newbornCareSpecialist: this.newbornCareSpecialist,
            postPartumDoula: this.postPartumDoula,
            spotter: this.spotter,
            traditionalNanny: this.traditionalNanny,
            travelingNanny: this.travelingNanny,
          },
        },
      });
      router.push({ name: "CaregiverAccountSetupProcess" });
    },
  },
};
</script>

<style></style>
