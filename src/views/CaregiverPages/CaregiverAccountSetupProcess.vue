<template>
  <main class="h-full gradient-form">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div
        class="xl:ml-20 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-12/12 mb-12 md:mb-0 justify-center items-center flex"
      >
        <div class="md:p-12 md:mx-2">
          <div class="bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3 m-5">
            <div class="container m-auto">
              <div>
                <h2 class="text-3xl font-bold text-black md:text-4xl mt-1 mb-4 pb-1">
                  Account Setup
                </h2>
              </div>

              <div v-if="!submitted">
                <component
                  v-bind:is="steps[currentStep].component"
                  v-bind:formValue="formValue[steps[currentStep].label]"
                  @formValueChange="updateFormValue"
                />
                <div class="text-center">
                  <div class="flex justify-between">
                    <div v-if="currentStep !== 0">
                      <ActionButton v-on:click="previous" text="Previous"> </ActionButton>
                    </div>
                    <div v-if="currentStep < steps.length - 1">
                      <ActionButton v-on:click="next" text="Next"> </ActionButton>
                    </div>
                    <div v-else>
                      <ActionButton v-on:click="submit" text="Submit">
                        Submit
                      </ActionButton>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-5xl font-bold text-center shadow-lg p-10">
                <span
                  ><span class="text-green-500">Thank you for submitting the form.</span>
                  <br /><br />
                  We will get back to you soon.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Charges from "../../components/Steps/Charges.vue";
import UploadPicture from "../../components/Steps/UploadPicture.vue";
import Location from "../../components/Steps/Location.vue";
import Experience from "../../components/Steps/Experience.vue";
import ProfileSetup from "../../components/Steps/ProfileSetup.vue";
import ActionButton from "../../components/ActionButton.vue";

export default {
  name: "MultiSteps",
  data() {
    return {
      currentStep: 0,
      submitted: false,
      formValue: {
        information: {
          name: "",
          age: 0,
          dob: "",
          email: "",
        },
        about: {
          address: "",
          gender: "",
        },
        profile: {
          profilePicture: "",
          bio: "",
        },
      },
      steps: [
        {
          component: ProfileSetup,
          label: "ProfileSetup",
        },
        {
          component: Experience,
          label: "Experience",
        },
        {
          component: Charges,
          label: "Charges",
        },
        {
          component: Location,
          label: "Location",
        },
        {
          component: UploadPicture,
          label: "Upload",
        },
      ],
    };
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
    previous() {
      this.currentStep -= 1;
    },
    updateFormValue(payload) {
      this.formValue = {
        ...this.formValue,
        [payload.label]: payload.data,
      };
    },
    submit() {
      this.submitted = true;
      console.log(this.formValue);
    },
  },
  components: [ProfileSetup, Experience, Charges, Location, UploadPicture],
  components: { ActionButton },
};
</script>
