<template>
  <div class="mt-24">
    <footer class="bg-secondary dark:bg-gray-900 text-white text-sm px-5">
      <div class="grid grid-cols-3 gap-8 px-6 py-8 md:grid-cols-3 ">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
            Company
          </h2>
          <ul class="text-white dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Careers</a>
            </li>

            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Vlog</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-6 text-sm font-semibold white uppercase dark:text-gray-400">
            Legal
          </h2>
          <ul class="text-white dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
            Community
          </h2>
          <ul class="text-white dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Health Community</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Free Add Ons</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Refer a Friend</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between"
      >
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center"
          >© 2023 <a>Copyright Care Fair™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a @click="redirectToLinkedIn" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <img src="/src/assets/linkedIn.svg" class="w-8 h-8" />
          </a>
          <a @click="redirectToInstagram" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <img src="/src/assets/instagram.svg" class="w-8 h-8" />
          </a>
        
          
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToInstagram() {
      window.location.href = 'https://instagram.com/thecarefair?igshid=YmMyMTA2M2Y=';
    },
    redirectToLinkedIn() {
      window.location.href = 'https://www.linkedin.com/company/the-care-fair/';
    }
  }
};
</script>

<style></style>
