<template>
  <div class="text-sm rounded-sm p-5 bg-white shadow-md my-12">
    <div class="border border-border p-3 rounded-sm">
      <span class="uppercase text-light my-1">{{ careType }}</span>
      <h5 class="font-semibold my-1">{{ jobTitle }}</h5>
      <div class="flex gap-3 my-1 text-xs">
        <span class="material-icons-outlined text-xs"> location_on </span>
        <p>{{ city }}, {{ country }}</p>
      </div>
      <div class="my-2">
        <p>{{ jobDescription }}</p>
      </div>
    </div>

    <div>
      <div class="flex justify-between mt-5">
        <div></div>
        <div>
          <action-button text="Apply for Job" @click="handleApplyForJob(job_id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ActionButton from "../ActionButton.vue";
export default {
  components: { ActionButton },
  name: "JobDetails",
  props: {
    job_id: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    careType: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions(["applyForJob"]),
    handleApplyForJob(id) {
      const userId = localStorage.getItem("id");
      this.applyForJob({
        jobId: id,
        applicants: userId,
      });
    },
  },
};
</script>

<style></style>
