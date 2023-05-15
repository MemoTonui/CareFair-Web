<template>
  <div class="text-sm rounded-sm p-5 bg-white shadow-md my-3">
    <div class="border-b border-border p-3 rounded-sm">
      <div class="flex gap-3 my-1 text-xs">
        <span class="material-icons-outlined text-xs"> location_on </span>
        <p>{{ city }}, {{ country }}</p>
      </div>
      <div class="flex justify-between">
        <div>
          <h5 class="font-semibold my-1">{{ firstName }} {{ lastName }}</h5>
        </div>
        <div class="text-primary">$ {{ charges }} /hour</div>
      </div>
    </div>

    <div class="my-2 p-2">
      <h5 class="font-semibold my-3">BIO</h5>
      <p>{{ bio }}</p>
    </div>

    <div class="my-2 p-2">
      <h5 class="font-semibold my-3">LANGUAGES</h5>
      <div v-for="language in languages" :key="language" class="inline-flex gap-2">
        <span class="capitalize">{{ language }}, </span>
      </div>
    </div>
    <div>
      <div class="my-10">
        <h5 class="uppercase font-semibold my-2">Reviews</h5>
        <div v-if="rating">
          <div v-if="rating.length <= 0">
            <div
              class="p-4 flex justify-center text-sm items-center bg-pink bg-opacity-10 text-pink"
            >
              User doesn't have any reviews yet
            </div>
          </div>
          <div v-else class="grid grid-cols-2 gap-3">
            <div v-for="review in rating.slice(0, 2)" :key="review._id" class="my-10">
              <user-reviews
                :date="new Date(review.date).toDateString()"
                :review="review.feedback"
                :rating="review.rating"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-10 my-8 p-2">
      <div>
        <h4 class="font-semibold mb-6">WORK EXPERIENCE</h4>
        <div v-if="previousWorkExperience">
          <div v-if="previousWorkExperience.length <= 0">
            <div
              class="p-4 flex justify-center text-sm items-center bg-light-green bg-opacity-10 text-light-green"
            >
              User hasn't added previous work experience yet
            </div>
          </div>
          <div v-else>
            <div v-for="experience in previousWorkExperience" :key="experience.title">
              <view-expereience-card
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
      <div>
        <h4 class="font-semibold mb-6">EDUCATION</h4>
        <div v-if="education">
          <div v-if="education.length <= 0">
            <div
              class="p-4 flex justify-center text-sm items-center bg-primary bg-opacity-10 text-primary"
            >
              User hasn't added your education yet
            </div>
          </div>
          <div>
            <div v-for="ed in education" :key="ed.title">
              <view-education-card
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
      <div class="flex justify-between mt-5">
        <div>
          <action-button
            text="Interview"
            @click="showInterviewModal = !showInterviewModal"
          />
        </div>
        <div>
          <router-link :to="{ name: 'HiringOptions' }">
            <action-button text="Hire" />
          </router-link>
        </div>
      </div>
    </div>
    <create-interview
      :show="showInterviewModal"
      :jobPost="jobPost"
      :caregiver="caregiverId"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ActionButton from "../ActionButton.vue";
import CreateInterview from "../modals/CreateInterview.vue";
import EducationCard from "./EducationCard.vue";
import ExperienceCard from "./ExperienceCard.vue";
import ReviewsCard from "./ReviewsCard.vue";
import UserReviews from "./UserReviews.vue";
import ViewEducationCard from "./ViewEducationCard.vue";
import ViewExpereienceCard from "./ViewExpereienceCard.vue";
import { ref, watch } from "vue";

export default {
  components: {
    ActionButton,
    EducationCard,
    ExperienceCard,
    ViewExpereienceCard,
    ViewEducationCard,
    ReviewsCard,
    UserReviews,
    CreateInterview,
  },
  name: "SearchUserDetails",
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    bio: {
      type: String,
      required: true,
    },
    charges: {
      type: String,
      required: true,
    },
    jobPost: {
      type: String,
      required: true,
    },
    caregiverId: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
    previousWorkExperience: {
      type: Array,
      required: true,
    },
    education: {
      type: Array,
      required: true,
    },
    rating: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const showInterviewModal = ref(false);

    return {
      showInterviewModal,
    };
  },
};
</script>

<style></style>
