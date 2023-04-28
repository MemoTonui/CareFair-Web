<template>
  <div>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-10 my-10">
      <div>
        <img :src="img" />
      </div>
      <div class="text-sm">
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">
            {{ firstName }} {{ lastName }}
          </h5>
          <p class="uppercase">{{ role }}</p>
        </div>
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">BIO</h5>
          <p class="">{{ shortCaption }}</p>
        </div>
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">Languages</h5>
          <div class="flex gap-3" v-for="language in languages" :key="language">
            <span class="p-1 bg-primary uppercase bg-opacity-20 text-primary">{{
              language
            }}</span>
          </div>
        </div>
      </div>
      <div class="text-sm">
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">Highest Education</h5>
          <p class="">Health Science</p>
        </div>
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">SALARY RANGE</h5>
          <p class="">$ {{ chargePerHour }} /hr</p>
        </div>
        <div class="my-3">
          <h5 class="text-secondary uppercase font-semibold my-2">LOCATION</h5>
          <p class="">{{ city }}, {{ country }}</p>
        </div>
      </div>
      <div></div>
      <div class="flex flex-col justify-end items-end">
        <div class="cursor-pointer my-3">
          <span
            class="bg-primary bg-opacity-20 rounded-full m-1 material-icons-outlined p-2 text-primary"
          >
            calendar_today
          </span>
          <!--span
            class="bg-pink bg-opacity-20 rounded-full m-1 material-icons-outlined p-2 text-pink"
          >
            favorite_border
          </!--span-->
        </div>
        <div class="my-3">
          <Rating :value="rating" />
        </div>
        <div class="my-3">
          <router-link :to="{ name: 'CaregiverAccountSetupProcess' }">
            <button
              href="#"
              class="p-2 px-6 pt-2 text-white text-sm bg-pink rounded-full baseline hover:border-2 hover:text-pink hover:bg-white"
            >
              Edit Profile
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import Rating from "./Rating.vue";
export default {
  components: { ActionButton, Rating },
  name: "ProfileSummaryPage",
  props: {
    role: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    shortCaption: {
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
    rating: {
      type: Number,
      required: true,
    },
    languages: {
      type: Array,
    },
    img: {
      type: String,
    },
    chargePerHour: {
      type: Number,
    },
  },
};
</script>

<style></style>
