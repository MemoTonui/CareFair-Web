<template>
  <div class="">
    <div class="flex justify-between space-x-4 text-sm">
      <div>
        <div class="flex">
          <img class="w-10 h-10 rounded-full mr-2" :src="img" alt="" />
          <div class="space-y-1 font-semibold dark:text-white">
            <p>
              {{ name }}
              <time
                datetime="2014-08-16 19:00"
                class="block text-xs my-2 text-gray-500 dark:text-gray-400"
                >{{ date }}</time
              >
            </p>
          </div>
        </div>
      </div>
      <div>
        <rating :value="rating" />
      </div>
    </div>

    <p class="mb-2 text-gray-500 text-sm dark:text-gray-400">
      {{ review }}
    </p>
  </div>
</template>

<script>
import Rating from "/src/components/Rating.vue";
export default {
  components: { Rating },
  name: "ReviewsCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
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
  },
};
</script>

<style></style>
