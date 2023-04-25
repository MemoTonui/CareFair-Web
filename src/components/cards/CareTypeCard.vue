<template>
  <div class="bg-white cursor-pointer">
    <div class="flex items-center justify-center">
      <!-- Component Start -->
      <form class="grid grid-cols-1 gap-5 w-full max-w-screen-sm">
        <div class="flex">
          <input
            v-model="care_type"
            class="hidden"
            id="child"
            type="radio"
            name="radio"
            v-bind:value="'child'"
            checked
          />
          <label
            class="flex flex-col p-4 border-2 border-border cursor-pointer"
            for="child"
          >
            <span class="text-md font-bold">Child Care</span>
            <span class="text-xs mt-2"
              >You provide the care of children, especially by a nursery, or childminder
              while parents are working.</span
            >
          </label>
        </div>
        <div>
          <input
            v-model="care_type"
            class="hidden"
            id="senior"
            type="radio"
            name="radio"
            v-bind:value="'senior'"
          />
          <label
            class="flex flex-col p-4 border-2 border-border cursor-pointer"
            for="senior"
          >
            <span class="text-md font-bold">Senior Care</span>
            <span class="text-xs mt-2"
              >You provide the care of older people who need help with medical problems or
              everyday tasks</span
            >
          </label>
        </div>
        <div>
          <input
            v-model="care_type"
            class="hidden"
            id="pet"
            type="radio"
            name="radio"
            v-bind:value="'pet'"
          />
          <label
            class="flex flex-col p-4 border-2 border-border cursor-pointer"
            for="pet"
          >
            <span class="text-md font-bold">Pet Care</span>
            <span class="text-xs mt-2"
              >You help in taking care of pets(dogs and cats )</span
            >
          </label>
        </div>

        <div class="flex justify-between mt-5">
          <div></div>
          <div>
            <action-button text="Start" @click.prevent="getCareType" />
          </div>
        </div>
      </form>
      <!-- Component End  -->
    </div>
  </div>
</template>

<script>
import ActionButton from "../ActionButton.vue";
import router from "/src/router";

export default {
  components: { ActionButton },
  data() {
    return {
      care_type: "child",
    };
  },
  methods: {
    getCareType() {
      if (this.care_type === "child") {
        router.replace({ name: "ChildCareSkillSet" });
      }
      if (this.care_type === "senior") {
        router.replace({ name: "SeniorCareSkillSet" });
      }
      if (this.care_type === "pet") {
        router.replace({ name: "PetCareSkillSet" });
      }
    },
  },
};
</script>

<style scoped>
input:checked + label {
  border-color: #0093b8;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
