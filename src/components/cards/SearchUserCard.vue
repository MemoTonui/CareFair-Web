<template>
  <div
    class="border-border hover:border-dark-pink border p-3 rounded-md my-1 cursor-pointer"
  >
    <div class="text-xs">
      <div class="flex gap-2">
        <div class="">
          <img v-if="img" class="w-10 h-10 rounded-full mr-2" :src="img" alt="" />
        </div>
        <div class="space-y-1 col-span-2 dark:text-white">
          <div class="flex justify-between">
            <div>
              <p class="uppercase font-semibold text-border">
                {{ careType }}
              </p>
            </div>
            <div
              v-if="verified"
              class="flex text-xs gap-2 text-primary bg-opacity-20 bg-primary"
            >
              <span class="p-0.5"
                ><span class="material-icons-outlined text-xs mr-1"> security </span
                >Verified</span
              >
            </div>
          </div>
          <div>
            <p>{{ firstName }} {{ lastName }}</p>
          </div>
          <div class="my-4">
            <rating :value="rate" />
          </div>
          <div class="flex justify-between gap-2">
            <div class="my-2">$ {{ charges }} per hour</div>
            <div class="my-2">{{ city }}, {{ country }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Rating from "../Rating.vue";

export default {
  components: { Rating },
  name: "EducationCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    careType: {
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
    verified: {
      type: Boolean,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    id: {
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
    charges: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["removeEducation"]),

    handleRemoveEducation(educationId) {
      this.removeEducation({
        education: educationId,
      });
    },
  },
};
</script>

<style></style>
