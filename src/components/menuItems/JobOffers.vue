<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-1 w-full p-2">
        <search-box />
        <div class="max-h-screen overflow-y-auto p-2">
          <div v-for="job in jobOffers" :key="job._id">
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
          <job-offer-details
            :careType="jobOfferDetails.careType"
            :city="jobOfferDetails.city"
            :country="jobOfferDetails.country"
            :jobDescription="jobOfferDetails.description"
            :jobTitle="jobOfferDetails.title"
            :job_id="jobOfferDetails._id"
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
    ...mapGetters(["jobOfferDetails"]),
  },
  methods: {
    ...mapActions(["getJobOffers", "getJobOfferById"]),
    handleGetJobId(id) {
      this.getJobOfferById({
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
