<template>
  <div class="text-sm rounded-sm p-5 bg-white shadow-md my-12">
    <div class="border border-border p-3 rounded-sm">
      <div class="flex gap-3 my-1 text-xs">
        <span class="material-icons-outlined text-xs"> location_on </span>
        <p>{{ city }}, {{ country }}</p>
      </div>
      <div class="flex justify-between my-2">
        <div>
          <h5 class="font-semibold my-1">{{ firstName }} {{ lastName }}</h5>
        </div>
        <div>
          <span class="uppercase text-primary my-1">${{ rate }} /hr</span>
        </div>
      </div>
      <hr class="text-border" />
      <div class="my-2">
        <h5 class="font-semibold my-2">BIO</h5>
        <p>{{ bio }}</p>
      </div>
    </div>

    <div class="mt-5 p-2">
      <h5 class="font-semibold my-5">More Information</h5>
      <div class="flex gap-5 my-2">
        <p>Status</p>
        <p v-if="confirmed" class="text-primary">Confirmed</p>
        <p v-else class="text-pink">UnConfirmed</p>
      </div>
      <div class="flex gap-5 my-2">
        <p>Platform</p>
        <p class="">{{ platform }}</p>
      </div>
      <div class="flex gap-5 my-2">
        <p>Date</p>
        <p>{{ date }}</p>
      </div>
      <div class="flex gap-5 my-2">
        <p>Time:</p>
        <p>{{ time }}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div></div>
      <div>
        <div v-if="confirmed">
          <action-button text="Cancel Interview" />
        </div>
        <div v-else>
          <action-button text="Confirm Interview" />
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
  name: "InterviewDetails",
  props: {
    interview_id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    rate: {
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
    bio: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
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
