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
    <div class="my-5">
      <h5 class="my-1 font-semibold">Summary</h5>
      <p class="my-1">Payment Summary</p>
      <div class="mt-5">
        <div class="border-b border-border flex justify-between my-2 p-2">
          <div><p>Hourly Rate</p></div>
          <div>
            <p>$ {{ rate }}</p>
          </div>
        </div>

        <div class="border-b border-border flex justify-between my-2 p-2">
          <div><p>Max Amount of Hours(Weekly)</p></div>
          <div>
            <p>{{ maxHours }} hours</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-10">
        <h5 class="font-semibold my-2">Contract Terms</h5>
        <p>Please preview your contract terms before sending the offer</p>
        <div class="my-3">
          <a :href="contract_url" target="_blank" class="flex gap-2">
            <span class="material-icons-outlined text-dark-pink"> picture_as_pdf </span>
            <p>Contract Terms</p>
          </a>
        </div>
      </div>
      <div class="flex justify-between mt-5">
        <div></div>
        <div>
          <action-button
            text="Accept Job Offer"
            @click="handleAcceptJobOffer(offerId, jobId)"
          />
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
    jobId: {
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
    rate: {
      type: String,
      required: true,
    },
    contract_url: {
      type: String,
      required: true,
    },
    maxHours: {
      type: String,
      required: true,
    },
    offerId: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapActions(["acceptJobOffer"]),
    handleAcceptJobOffer(offer_id, job_id) {
      const userId = localStorage.getItem("id");
      this.acceptJobOffer({
        offerId: offer_id,
        jobId: job_id,
        careGiver: userId,
      });
    },
  },
};
</script>

<style></style>
