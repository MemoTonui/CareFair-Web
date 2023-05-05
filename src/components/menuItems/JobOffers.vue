<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-1 w-full p-2">
        <search-box />
        <div class="max-h-screen overflow-y-auto p-2">
          <div v-for="job in jobOffers" :key="job._id">
            <job-card
              :datePosted="new Date(job.offerDate).toDateString()"
              :jobDescription="job.jobPost.description"
              :jobTitle="job.jobPost.title"
              :city="job.jobPost.city"
              :country="job.jobPost.country"
              @click="handleGetJobId(job._id)"
            />
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div v-if="Object.keys(jobOfferDetails).length !== 0">
          <job-offer-details
            :careType="jobOfferDetails.careType"
            :city="jobOfferDetails.jobPost.city"
            :country="jobOfferDetails.jobPost.country"
            :jobDescription="jobOfferDetails.jobPost.description"
            :jobTitle="jobOfferDetails.jobPost.title"
            :jobId="jobOfferDetails.jobPost._id"
            :contract_url="jobOfferDetails.contractUrl"
            :rate="jobOfferDetails.payByHour"
            :maxHours="jobOfferDetails.weeklyLimit"
            :offerId="jobOfferDetails._id"
          />
        </div>
        <div v-else class="flex justify-center items-center p-10 text-border text-md">
          CLICK ON A JOB TO VIEW THE DETAILS
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
import JobOfferDetails from "../cards/JobOfferDetails.vue";
export default {
  components: { JobCard, SearchBox, JobOfferDetails },
  data() {
    return {
      selectedJob: {},
      //jobDetails: {},
      id: "",
    };
  },
  created() {
    this.getJobOffers();
  },
  computed: {
    ...mapGetters(["jobOffers", "jobOfferDetails"]),
  },
  methods: {
    ...mapActions(["getJobOffers", "getJobOfferById"]),
    handleGetJobId(id) {
      this.getJobOfferById({
        jobId: id,
      });
    },
  },
  /* watch: {
    jobs: function (val) {
      this.getJobById({
        jobId: val.id,
      });
    },
  },*/
};
</script>

<style></style>
