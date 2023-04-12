<template>
  <div class="bg-white cursor-pointer">
    <div class="flex items-center justify-center">
      <!-- Component Start -->
      <form class="flex gap-10 w-full">
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="sunday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'sunday'"
          />
          <label
            class="flex flex-col sm:p-1 border-2 border-border cursor-pointer"
            for="sunday"
          >
            <span class="sm:text-xs font-bold">S</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="monday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'monday'"
          />
          <label
            class="flex flex-col sm:p-1 border-2 border-border cursor-pointer"
            for="monday"
          >
            <span class="sm:text-xs font-bold">M</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="tuesday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'tuesday'"
          />
          <label
            class="flex flex-col border-2 sm:p-1 border-border cursor-pointer"
            for="tuesday"
          >
            <span class="sm:text-xs font-bold">T</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="wednesday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'wednesday'"
          />
          <label
            class="flex flex-col border-2 sm:p-1 border-border cursor-pointer"
            for="wednesday"
          >
            <span class="sm:text-xs font-bold">W</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="thursday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'thursday'"
          />
          <label
            class="flex flex-col border-2 sm:p-1 border-border cursor-pointer"
            for="thursday"
          >
            <span class="sm:text-xs font-bold">T</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="friday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'friday'"
          />
          <label
            class="flex flex-col border-2 sm:p-1 border-border cursor-pointer"
            for="friday"
          >
            <span class="sm:text-xs font-bold">F</span>
          </label>
        </div>
        <div class="flex">
          <input
            v-model="availability"
            class="hidden"
            id="saturday"
            type="checkbox"
            name="checkbox"
            v-bind:value="'saturday'"
          />
          <label
            class="flex flex-col sm:p-1 border-2 border-border cursor-pointer"
            for="saturday"
          >
            <span class="sm:text-xs font-bold">S</span>
          </label>
        </div>
      </form>
      <!-- Component End  -->
    </div>
  </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import router from "/src/router";

export default {
  name: "Availability",
  components: { ActionButton },
  data() {
    return {
      availability: " ",
    };
  },
  methods: {},
};
</script>

<style scoped>
input:checked + label {
  background-color: #0093b8;
  border-color: #0093b8;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
