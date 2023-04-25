<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-1 w-full p-2">
        <search-box />
        <div class="max-h-screen overflow-y-auto p-2">
          <div v-for="job in jobs" :key="job._id">
            <job-card
              :datePosted="job.date"
              :jobDescription="job.description"
              :jobTitle="job.title"
              :city="job.city"
              :country="job.country"
              @click="handleGetJobId(job._id)"
            />
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div>
          <job-details
            :careType="jobDetails.careType"
            :city="jobDetails.city"
            :country="jobDetails.country"
            :jobDescription="jobDetails.description"
            :jobTitle="jobDetails.title"
            :job_id="jobDetails._id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import JobCard from "../cards/JobCard.vue";
import SearchBox from "../SearchBox.vue";
import JobDetails from "../cards/JobDetails.vue";
export default {
  components: { JobCard, SearchBox, JobDetails },
  data() {
    return {
      selectedJob: {},
      //jobDetails: {},
      id: "",
    };
  },
  created() {
    this.getAllJobs();
  },
  computed: {
    ...mapGetters(["jobs", "jobDetails"]),
  },
  methods: {
    ...mapActions(["getAllJobs", "getJobById"]),
    handleGetJobId(id) {
      this.getJobById({
        jobId: id,
      });
    },
  },
  watch: {
    jobs: function (val) {
      this.getJobById({
        jobId: val.id,
      });
    },
  },
};
</script>

<style></style>
