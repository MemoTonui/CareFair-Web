<template>
  <div>
    <div
      class="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img class="w-16 h-16" :src="serviceImage" />

      <a href="#">
        <h5
          :class="textColor"
          class="mb-2 text-md font-semibold uppercase text-gray-900 dark:text-white"
        >
          {{ serviceName }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
        {{ serviceDescription }}
      </p>
      <a href="#" :class="textColor" class="inline-flex items-center hover:underline">
        Learn More
        <svg
          class="w-5 h-5 ml-2"
          :class="textColor"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
          ></path>
          <path
            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceName: {
      type: String,
    },
    serviceDescription: {
      type: String,
    },
    serviceImage: {
      type: String,
    },
    textColor: {
      type: String,
      default: "text-primary",
    },
  },
};
</script>

<style></style>
