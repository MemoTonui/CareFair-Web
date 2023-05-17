<template>
  <div>
    <div v-if="userInfo.role == 'careReceiver'">
      <div class="grid grid-cols-4 gap-10">
        <div class="col-span-1 w-full p-2">
          <search-box />
          <div class="max-h-screen overflow-y-auto p-2">
            <div v-for="job in userJobs" :key="job._id">
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
          <div>
            <span
              class="bg-primary cursor-pointer material-icons-outlined text-xs text-white rounded-full p-2 hover:bg-white hover:border-primary hover:text-primary hover:border-1"
              @click="showCreateJob = !showCreateJob"
            >
              add
            </span>
          </div>
        </div>
        <div class="col-span-3">
          <div v-if="Object.keys(jobDetails).length !== 0">
            <job-details
              :careType="jobDetails.careType"
              :city="jobDetails.city"
              :country="jobDetails.country"
              :jobDescription="jobDetails.description"
              :maxHours="jobDetails.weeklyLimit"
              :minimumRate="jobDetails.minimumRate"
              :maximumRate="jobDetails.maximumRate"
              :applicants="jobDetails.applicants"
              :jobTitle="jobDetails.title"
              :job_id="jobDetails._id"
            />
          </div>
          <div v-else class="flex justify-center items-center p-10 text-border text-md">
            CLICK ON A JOB TO VIEW THE DETAILS
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-10" v-else>
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
        <div v-if="Object.keys(jobDetails).length !== 0">
          <job-details
            :careType="jobDetails.careType"
            :city="jobDetails.city"
            :country="jobDetails.country"
            :jobDescription="jobDetails.description"
            :jobTitle="jobDetails.title"
            :job_id="jobDetails._id"
          />
        </div>
        <div v-else class="flex justify-center items-center p-10 text-border text-md">
          CLICK ON A JOB TO VIEW THE DETAILS
        </div>
      </div>
    </div>
    <create-job :show="showCreateJob" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import JobCard from "../cards/JobCard.vue";
import SearchBox from "../SearchBox.vue";
import JobDetails from "../cards/JobDetails.vue";
import CreateJob from "../modals/CreateJob.vue";
export default {
  components: { JobCard, SearchBox, JobDetails, CreateJob },
  data() {
    return {
      selectedJob: {},
      //jobDetails: {},
      id: "",
    };
  },
  created() {
    this.getAllJobs();
    this.getUserJobs();
    this.getUserByFirebase();
  },
  computed: {
    ...mapGetters(["jobs", "jobDetails", "userInfo", "userJobs"]),
  },
  methods: {
    ...mapActions(["getAllJobs", "getJobById", "getUserByFirebase", "getUserJobs"]),
    handleGetJobId(id) {
      this.getJobById({
        jobId: id,
      });
    },
  },
  setup() {
    const showCreateJob = ref(false);
    return {
      showCreateJob,
    };
  },
};
</script>

<style></style>
