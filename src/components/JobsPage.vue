<template>
  <div>
    <div class="bg-primary bg-opacity-5 p-3 m-10 justify-center">
      <div class="grid col-span-1 md:grid-cols-3 gap-3">
        <TextBox type="text" placeholder="City" label="Enter the City" v-model="city" />

        <TextBox
          type="number"
          placeholder="$ per hour"
          label="Minimum Rate"
          v-model="minimumRate"
        />
        <TextBox
          type="number"
          placeholder="$ per hour"
          label="Maximum Rate"
          v-model="maximumRate"
        />
      </div>
      <div class="grid col-span-1 md:grid-cols-3 gap-3">
        <TextBox
          type="number"
          placeholder="Experience"
          label="Minimum Experience in years"
          v-model="minimumExperience"
        />

        <div>
          <check-box-list
            :options="selectCareType"
            v-model:value="careType"
            class="p-3"
            label="Select the Service you need:"
          />
        </div>
        <div>
          <TagInput
            label="Enter your Preferred Languages"
            placeholder="Preferred Languages"
            :tags="tags"
            @on-tags-changed="handleChangeTag(tags)"
          />
        </div>
      </div>
      <div class="flex justify-between my-5">
        <div></div>
        <div>
          <action-button @click="handleFilterJobs()" text="Apply Filter" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-10 mx-10">
      <div class="col-span-1 w-full p-2">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import JobCard from "/src/components/cards/JobCard.vue";
import SearchBox from "/src/components/SearchBox.vue";
import JobDetails from "/src/components/cards/JobDetails.vue";
import CheckBoxList from "./VerticalCheckboxList.vue";
import TextBox from "/src/components/TextBox2.vue";
import TagInput from "/src/components/TagInput.vue";
import ActionButton from "/src/components/ActionButton.vue";

export default {
  components: {
    JobCard,
    SearchBox,
    JobDetails,
    TextBox,
    TagInput,
    CheckBoxList,
    ActionButton,
  },
  data() {
    return {
      selectedJob: {},
      //jobDetails: {},
      id: "",
      city: "",
      minimumRate: 0,
      maximumRate: 0,
      minimumExperience: 0,
      selectCareType: [
        { label: "Child Care", value: "childCare" },
        { label: "Pet Care", value: "petCare" },
        { label: "Senior Care", value: "seniorCare" },
      ],
      careType: [],
      tags: ["English"],
    };
  },
  created() {
    this.getAllJobs();
  },
  computed: {
    ...mapGetters(["jobs", "jobDetails"]),
  },
  methods: {
    ...mapActions(["getAllJobs", "getJobById", "filterJobs"]),
    handleGetJobId(id) {
      this.getJobById({
        jobId: id,
      });
    },
    handleFilterJobs() {
      this.filterJobs({
        languages: this.tags,
        minimumRate: this.minimumRate,
        maximumRate: this.maximumRate,
        minimumExperience: this.minimumExperience,
        careType: this.careType,
        city: this.city,
      });
    },
  },
  /*watch: {
    jobs: function (val) {
      this.getJobById({
        jobId: val.id,
      });
    },
  },*/
};
</script>

<style></style>
