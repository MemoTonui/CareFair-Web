<template>
  <div class="shadow-sm rounded-sm p-3">
    <div class="flex justify-between space-x-4 text-sm">
      <div>
        <div class="flex">
          <div class="space-y-1 font-semibold dark:text-white">
            <time
              datetime="2014-08-16 19:00"
              class="block text-xs my-2 text-gray-500 dark:text-gray-400"
              >{{ date }}</time
            >
          </div>
        </div>
      </div>
      <div>
        <rating :value="rating" />
      </div>
    </div>

    <p class="mb-2 text-light text-sm dark:text-gray-400">
      {{ review }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Rating from "/src/components/Rating.vue";
export default {
  components: { Rating },
  name: "ReviewsCard",
  props: {
    date: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
