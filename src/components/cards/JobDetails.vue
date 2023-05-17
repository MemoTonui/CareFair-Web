<template>
  <div class="text-sm rounded-sm p-5 bg-white shadow-md my-12">
    <div>
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
    </div>
    <div v-if="userInfo.role == 'careReceiver'">
      <div class="my-5">
        <h5 class="my-1 font-semibold">Summary</h5>
        <p class="my-1">Payment Summary</p>
        <div class="mt-5">
          <div class="border-b border-border flex justify-between my-2 p-2">
            <div><p>Hourly Rate</p></div>
            <div>
              <p>$ {{ minimumRate }} to $ {{ maximumRate }}</p>
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
          <div class="my-10">
            <div>
              <h5 class="font-semibold">Applicants</h5>
            </div>
            <applicants-table :tableData="applicants" :tableHead="tableHead" />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-5">
        <div><action-button text="Edit Job" @click="handleApplyForJob(job_id)" /></div>
        <div>
          <action-button text="Delete Job" @click="handleDeleteJob(job_id)" />
        </div>
      </div>
    </div>
    <div v-else>
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
import ApplicantsTable from "../tables/ApplicantsTable.vue";
export default {
  components: { ActionButton, ApplicantsTable },
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
    minimumRate: {
      type: String,
      required: true,
    },
    maximumRate: {
      type: String,
      required: true,
    },
    maxHours: {
      type: String,
      required: true,
    },
    applicants: {
      type: Array,
    },
  },
  data() {
    return {
      tableHead: ["name", "care type", "location", "application date", "actions"],
      tableData: [],
    };
  },
  created() {
    this.getUserByFirebase();
  },
  computed: {
    ...mapGetters(["userInfo", "userIdInfo"]),
  },
  methods: {
    ...mapActions(["applyForJob", "getUserByFirebase", "getUserById", "deleteJob"]),
    handleApplyForJob(id) {
      const userId = localStorage.getItem("id");
      this.applyForJob({
        jobId: id,
        applicants: userId,
      });
    },
    handleDeleteJob(id) {
      this.deleteJob({
        jobId: id,
      });
    },
  },
};
</script>

<style></style>
