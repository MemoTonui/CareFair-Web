<template>
  <main class="h-full gradient-form">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div
        class="xl:ml-20 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-12/12 mb-12 md:mb-0 justify-center items-center flex"
      >
        <div class="md:p-12 md:mx-2">
          <div class="bg-white shadow-md rounded-lg py-10 md:py-10 md:px-10 px-3 m-5">
            <div class="container m-auto">
              <div>
                <h2 class="text-3xl font-bold text-black md:text-4xl mt-1 mb-4 pb-1">
                  Contract Terms
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
              <div v-else class="text-xl font-semibold text-center p-10">
                <div class="justify-center flex items-center">
                  <img src="/src/assets/balloons.png" class="w-24" alt="Yaay" />
                </div>
                <span
                  ><span class="my-3 text-green-500"
                    >Your details were successfully added !</span
                  >
                  <br /><br />
                </span>
                <a class="text-sm text-primary underline cursor-pointer"
                  >Click here to view your profile</a
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
import Step1 from "../../components/Steps/ContractTermsSteps/Step1.vue";
import Step2 from "../../components/Steps/ContractTermsSteps/Step2.vue";
import Step3 from "../../components/Steps/ContractTermsSteps/Step3.vue";
import Step4 from "../../components/Steps/ContractTermsSteps/Step4.vue";
import Step5 from "../../components/Steps/ContractTermsSteps/Step5.vue";
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
          component: Step1,
          label: "Step 1",
        },
        {
          component: Step2,
          label: "Step 2",
        },
        {
          component: Step3,
          label: "Step 3",
        },
        {
          component: Step4,
          label: "Step 4",
        },
        {
          component: Step5,
          label: "Step 5",
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
  components: [Step1, Step2, Step3, Step4, Step5],
  components: { ActionButton },
};
</script>
<style scoped>
h2 {
  font-family: "Gentium Book Plus", serif;
}
</style>
