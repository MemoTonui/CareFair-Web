<template>
  <div
    class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-end items-center m-5"
  >
    <div class="flex justify-center items-center mx-auto">
      <img src="/src/assets/PhoneScreen.svg" class="max-w-full h-auto" />
    </div>
    <div class="">
      <div class="w-full p-1 text-center sm:p-4 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="m-1 text-4xl font-bold text-black md:text-4xl dark:text-white">
          Get connected to some help <br />
          from anywhere using our <br />
          mobile app
        </h5>
        <p class="my-5 text-base text-light sm:text-lg dark:text-gray-400">
          Available for Android and iOS
        </p>
        <div
          class="items-center justify-center cursor-pointer flex gap-4 sm:flex sm:space-y-0 sm:space-x-4"
        >
          <div>
            <a
              @click="redirectToAppStore"
              class="w-full sm:w-auto bg-primary focus:ring-4 focus:outline-none hover:border-primary hover:bg-white hover:border-2 hover:text-primary focus:ring-gray-300 text-white rounded-sm inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                class="mr-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <div class="text-left">
                <div class="mb-1 text-xs">Get it on</div>
                <div class="-mt-1 text-sm font-semibold">Mac App Store</div>
              </div>
            </a>
          </div>
          <div class="">
            <a
              @click="redirectToPlayStore"
              class="w-full sm:w-auto bg-secondary focus:ring-4 hover:border-secondary hover:border-2 hover:bg-white hover:text-secondary focus:outline-none focus:ring-gray-300 text-white rounded-sm inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img src="/src/assets/PlayStore.svg" class="mr-3 w-7 h-7" />
              <div class="text-left">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToPlayStore() {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.carefair.carefair";
    },
    redirectToAppStore() {
      window.location.href =
        "https://apps.apple.com/us/app/carefair-find-caregivers/id6444377086";
    },
  },
};
</script>

<style scoped>
h5 {
  font-family: "Gentium Book Plus", serif;
}
</style>
