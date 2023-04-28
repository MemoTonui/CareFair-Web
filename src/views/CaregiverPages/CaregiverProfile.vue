<template>
  <main>
    <div
      class="container items-center justify-center px-6 md:px-48 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
    >
      <div>
        <ProfileSummaryPage
          :img="userInfo.profileImage"
          :city="userInfo.city"
          :country="userInfo.country"
          :languages="userInfo.languages"
          :firstName="userInfo.firstName"
          :lastName="userInfo.lastName"
          :role="userInfo.role"
          :shortCaption="userInfo.shortCaption"
          :chargePerHour="userInfo.chargePerHour"
        />
      </div>
      <div class="text-sm">
        <div class="my-5">
          <h5 class="text-secondary uppercase font-semibold my-2">About</h5>
          <p class="mb-5">
            {{ userInfo.about }}
          </p>
          <ul class="m-3 grid-cols-2 grid">
            <li class="flex my-1" v-if="userInfo.canHelpInEducation">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>Can provide educational assistance</span>
            </li>
            <li class="flex my-1" v-if="userInfo.ownCar">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>Sitter owns a car</span>
            </li>
            <li class="flex my-1" v-if="userInfo.availableAllDay">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>Generally available mornings, afternoons, evenings, late-nights</span>
            </li>
            <li class="flex my-1" v-if="userInfo.availableBeforeAndAfterSchool">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>Before and after school care availability</span>
            </li>
            <li class="flex my-1" v-if="userInfo.availableBeforeAndAfterSchool">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>Before and after school care availability</span>
            </li>
            <li class="flex my-1" v-if="userInfo.specialNeeds">
              <span class="material-icons-outlined mr-1 text-sm"> check </span>
              <span>You have experience with special needs individuals</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="my-10">
          <h5 class="text-secondary uppercase font-semibold my-2">Reviews</h5>
          <div v-if="userInfo.rating">
            <div v-if="userInfo.rating.length <= 0">
              <div
                class="p-4 flex justify-center text-sm items-center bg-pink bg-opacity-10 text-pink"
              >
                You don't have any reviews yet
              </div>
            </div>
            <div v-else>
              <div v-for="review in userInfo.rating" :key="review.name" class="my-10">
                <reviews-card
                  :date="new Date(review.date).toDateString()"
                  :img="review.img"
                  :name="review.name"
                  :rating="review.rating"
                  :review="review.feedback"
                  :id="review.feedbackGiver"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <div class="flex justify-between">
            <h5 class="text-secondary uppercase font-semibold my-2">Work Experience</h5>

            <div class="text-sm">
              <span
                class="material-icons-outlined m-3 cursor-pointer"
                @click="showWorkExperienceModal = !showWorkExperienceModal"
              >
                add
              </span>
            </div>
          </div>
          <div v-if="userInfo.previousWorkExperience">
            <div v-if="userInfo.previousWorkExperience.length <= 0">
              <div
                class="p-4 flex justify-center text-sm items-center bg-light-green bg-opacity-10 text-light-green"
              >
                You haven't added previous work experience yet
              </div>
            </div>
            <div v-else>
              <div
                v-for="experience in userInfo.previousWorkExperience"
                :key="experience.title"
              >
                <experience-card
                  :title="experience.title"
                  :description="experience.location"
                  :startDate="new Date(experience.startDate).toDateString()"
                  :endDate="new Date(experience.endDate).toDateString()"
                  :id="experience._id"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <div class="flex justify-between">
            <h5 class="text-secondary uppercase font-semibold my-2">Education</h5>

            <div class="text-sm">
              <span
                class="material-icons-outlined m-3 cursor-pointer"
                @click="showEducationModal = !showEducationModal"
              >
                add
              </span>
            </div>
          </div>
          <div v-if="userInfo.education">
            <div v-if="userInfo.education.length <= 0">
              <div
                class="p-4 flex justify-center text-sm items-center bg-primary bg-opacity-10 text-primary"
              >
                You haven't added your education yet
              </div>
            </div>
            <div>
              <div v-for="ed in userInfo.education" :key="ed.title">
                <education-card
                  :img="ed.img"
                  :title="ed.school"
                  :description="ed.degree"
                  :startDate="new Date(ed.startDate).toDateString()"
                  :endDate="new Date(ed.endDate).toDateString()"
                  :id="ed._id"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <h5 class="text-secondary uppercase font-semibold my-2">Activity</h5>
          <div class="my-5">
            <div v-for="activity in activities" :key="activity.title">
              <activity-card
                :title="activity.title"
                :description="activity.description"
                :img="activity.img"
                :likes="activity.likes"
                :comments="activity.comments"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <h5 class="text-secondary uppercase font-semibold my-2">Events</h5>
          <div class="my-5">
            <div v-for="event in events" :key="event.title">
              <event-card
                :title="event.title"
                :description="event.description"
                :img="event.img"
                :likes="event.likes"
                :comments="event.comments"
                :attendees="event.attendees"
                :activityLog="event.activityLog"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <education-modal :show="showEducationModal" />
    <work-experience-modal :show="showWorkExperienceModal" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import ActivityCard from "../../components/cards/ActivityCard.vue";
import EventCard from "../../components/cards/EventCard.vue";
import ExperienceCard from "../../components/cards/ExperienceCard.vue";
import EducationModal from "../../components/modals/EducationModal.vue";
import WorkExperienceModal from "../../components/modals/WorkExperienceModal.vue";
import ProfileSummaryPage from "../../components/ProfileSummaryPage.vue";
import ReviewsCard from "../../components/cards/ReviewsCard.vue";
import EducationCard from "../../components/cards/EducationCard.vue";
export default {
  components: {
    ProfileSummaryPage,
    ReviewsCard,
    ExperienceCard,
    EventCard,
    ActivityCard,
    EducationModal,
    WorkExperienceModal,
    EducationCard,
  },
  data() {
    return {
      generalRating: 0,
      activities: [
        {
          title: "Jane Doe’s Care Giver Event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ame",
          img: "/src/assets/bgImage.png",
          likes: "5",
          comments: "2",
          attendees: "12",
        },
      ],
      events: [
        {
          activityLog: "Jane Doe  created this event",
          title: "Jane Doe’s Care Giver Event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ame",
          img: "/src/assets/bgImage.png",
          likes: "5",
          comments: "2",
          attendees: "12",
        },
      ],
    };
  },
  created() {
    this.getUserByFirebase();
  },
  /*updated() {
    this.getUserByFirebase();
  },*/
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["getUserByFirebase"]),
  },
  /* watch: {
    userInfo: function (val) {
      if (val) {
        this.userInfo = this.getUserByFirebase();
      }
    },
  },*/
  setup() {
    const showEducationModal = ref(false);
    const showWorkExperienceModal = ref(false);

    return {
      showEducationModal,
      showWorkExperienceModal,
    };
  },
};
</script>

<style></style>
