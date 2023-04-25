<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-1 w-full p-2">
        <search-box />
        <div class="max-h-screen overflow-y-auto">
          <div v-for="interview in interviews" :key="interview._id">
            <interviews-cards
              :date="interview.date"
              name="Caregiver needed"
              :status="interview.confirmed"
              :time="interview.time"
              timeLeft=""
            />
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import InterviewsCards from "../../cards/InterviewsCards.vue";
import SearchBox from "../../SearchBox.vue";
export default {
  components: { InterviewsCards, SearchBox },
  data() {
    return {
      selectedJob: {},
      //jobDetails: {},
      id: "",
    };
  },
  created() {
    this.getPastInterviews();
  },
  computed: {
    ...mapGetters(["interviews"]),
  },
  methods: {
    ...mapActions(["getPastInterviews"]),
    /* handleGetJobId(id) {
      this.getJobById({
        jobId: id,
      });
    },*/
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
