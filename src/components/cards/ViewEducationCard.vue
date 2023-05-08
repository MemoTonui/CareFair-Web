<template>
  <div class="border-border border p-5 rounded-md my-1 cursor-pointer">
    <div class="flex justify-between space-x-4 text-sm">
      <div>
        <div class="flex">
          <div>
            <img v-if="img" class="w-10 h-10 rounded-full mr-2" :src="img" alt="" />
          </div>
          <div class="space-y-1 dark:text-white">
            <p class="uppercase font-semibold">
              {{ title }}
            </p>
            <p>
              {{ description }}
            </p>
            <p>{{ startDate }} to {{ endDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EducationCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
