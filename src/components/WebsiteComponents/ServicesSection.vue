<template>
  <div class="flex justify-center my-16">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-5">
      <div>
        <div
          class="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-2 hover:border-primary"
        >
          <img class="w-16 h-16" src="/src/assets/child.gif" />

          <a href="#">
            <h5
              class="mb-2 text-md text-primary font-semibold uppercase text-gray-900 dark:text-white"
            >
              Child Care
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
            Professional nannies are magical humans with a unique set of skills and the
            power to swoop in and make children and parents feel at ease.
          </p>
          <a href="#" class="inline-flex text-primary items-center hover:underline">
            Learn More
            <svg
              class="w-5 h-5 ml-2 text-primary"
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

      <div>
        <div
          class="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-2 hover:border-pink"
        >
          <img class="w-16 h-16" src="/src/assets/pet.gif" />

          <a href="#">
            <h5
              class="mb-2 text-md text-pink font-semibold uppercase text-gray-900 dark:text-white"
            >
              Pet Care
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
            A pet care giver is someone who is responsible for the well-being and daily
            care of pets, such as dogs, cats, and other domestic animals.
          </p>
          <a href="#" class="inline-flex text-pink items-center hover:underline">
            Learn More
            <svg
              class="w-5 h-5 ml-2 text-pink"
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

      <div>
        <div
          class="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-2 hover:border-orange"
        >
          <img class="w-16 h-16" src="/src/assets/senior.gif" />

          <a href="#">
            <h5
              class="mb-2 text-md text-orange font-semibold uppercase text-gray-900 dark:text-white"
            >
              Senior Care
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
            Professional nannies are magical humans with a unique set of skills and the
            power to swoop in and make children and parents feel at ease.
          </p>
          <a href="#" class="inline-flex text-orange items-center hover:underline">
            Learn More
            <svg
              class="w-5 h-5 ml-2 text-orange"
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
    </div>
  </div>
</template>
<script>
import Cards from "/src/components/WebsiteComponents/ServiceCards.vue";
export default {
  components: {
    Cards,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
h5{
  font-family: 'Gentium Book Plus', serif;}
</style>
