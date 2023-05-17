<template>
  <div>
    <div v-if="userInfo.role == 'careReceiver'">
      <div class="grid grid-cols-4 gap-10">
        <div class="col-span-1 w-full p-2">
          <search-box />
          <div class="max-h-screen overflow-y-auto">
            <div v-for="interview in interviews" :key="interview._id">
              <interviews-cards
                :date="new Date(interview.date).toDateString()"
                :firstName="interview.careGiver.firstName"
                :lastName="interview.careGiver.lastName"
                :status="interview.confirmed"
                :time="new Date(interview.time).toLocaleTimeString()"
                timeLeft=""
                :cancelled="interview.cancelled"
                :confirmed="interview.confirmed"
                @click="handleGetInterviewId(interview._id)"
              />
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div v-if="Object.keys(interviewDetails).length !== 0">
            <caregiver-interview-details-card
              :bio="interviewDetails.careGiver.about"
              :city="interviewDetails.careGiver.city"
              :confirmed="interviewDetails.confirmed"
              :country="interviewDetails.careGiver.country"
              :date="new Date(interviewDetails.date).toDateString()"
              :interview_id="interviewDetails._id"
              :firstName="interviewDetails.careGiver.firstName"
              :lastName="interviewDetails.careGiver.lastName"
              :platform="interviewDetails.platform"
              :time="new Date(interviewDetails.time).toLocaleTimeString()"
              :rate="interviewDetails.careGiver.chargePerHour"
            />
          </div>
          <div v-else class="flex justify-center items-center p-10 text-border text-md">
            CLICK ON AN INTERVIEW TO VIEW THE DETAILS
          </div>
        </div>
      </div>
    </div>
    <div v-else class="grid grid-cols-4 gap-10">
      <div class="col-span-1 w-full p-2">
        <search-box />
        <div class="max-h-screen overflow-y-auto">
          <div v-for="interview in interviews" :key="interview._id">
            <interviews-cards
              :date="new Date(interview.date).toDateString()"
              :firstName="interview.careReceiver.firstName"
              :lastName="interview.careReceiver.lastName"
              :status="interview.confirmed"
              :time="new Date(interview.time).toLocaleTimeString()"
              timeLeft=""
              @click="handleGetInterviewId(interview._id)"
            />
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div v-if="Object.keys(interviewDetails).length !== 0">
          <caregiver-interview-details-card
            :bio="interviewDetails.careReceiver.about"
            :city="interviewDetails.careReceiver.city"
            :confirmed="interviewDetails.confirmed"
            :country="interviewDetails.careReceiver.country"
            :date="new Date(interviewDetails.date).toDateString()"
            :interview_id="interviewDetails._id"
            :firstName="interviewDetails.careReceiver.firstName"
            :lastName="interviewDetails.careReceiver.lastName"
            :platform="interviewDetails.platform"
            :time="new Date(interviewDetails.time).toLocaleTimeString()"
          />
        </div>
        <div v-else class="flex justify-center items-center p-10 text-border text-md">
          CLICK ON AN INTERVIEW TO VIEW THE DETAILS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import InterviewsCards from "../../cards/InterviewsCards.vue";
import SearchBox from "../../SearchBox.vue";
import CaregiverInterviewDetailsCard from "../../cards/CaregiverInterviewDetailsCard.vue";
export default {
  components: { InterviewsCards, SearchBox, CaregiverInterviewDetailsCard },
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
    ...mapGetters(["interviews", "interviewDetails", "userInfo"]),
  },
  methods: {
    ...mapActions(["getPastInterviews", "getInterviewById", "getUserByFirebase"]),
    handleGetInterviewId(id) {
      this.getInterviewById({
        interviewId: id,
      });
    },
  },
};
</script>

<style></style>
