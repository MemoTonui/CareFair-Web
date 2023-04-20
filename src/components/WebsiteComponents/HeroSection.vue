<template>
  <div id="hero" class="">
    <!-- Flex Container -->
    <div
      class="container flex flex-col-reverse place-items-center items-center justify-center gap-10 px-6 mx-auto space-y-0 py-5 md:space-y-0 md:flex-row"
    >
      <!-- Left item -->
      <div class="flex flex-col justify-center space-y-12 px-2 py-10">
        <div>
          <div
            class="md:inline-flex hidden items-center justify-center bg-primary bg-opacity-20 rounded-full gap-2 px-3 py-2 text-primary"
          >
            <span class="material-icons-outlined"> verified </span>
            <p>Get a caregiver today!</p>
          </div>
        </div>
        <h1
          class="max-w-xl text-4xl font-bold text-black text-center md:text-5xl md:text-left w-full"
        >
          Experience <span class="text-primary h1">Compassionate</span> and
          <span class="text-primary h1">Professional </span>
          care for your loved ones.
        </h1>
        <p class="max-w-md text-black md:text-left">
          Take the first step towards providing your loved one with compassionate and
          professional care.
        </p>
        <div class="flex justify-center md:justify-start uppercase gap-6">
          <button
            href="#"
            class="p-3 px-6 pt-2 text-white uppercase text-sm bg-primary rounded-full baseline hover:border-2 hover:text-primary hover:bg-white"
          >
            Get a Caregiver
          </button>
          <router-link :to="{ name: 'SwitchAccount' }">
            <button
              href="#"
              class="p-3 px-6 pt-2 uppercase text-white text-sm bg-pink rounded-full baseline hover:border-2 hover:text-pink hover:bg-white"
            >
              Become a Caregiver
            </button>
          </router-link>
        </div>
      </div>
      <!-- Image -->
      <div class="flex justify-center items-center md:w-1/2">
        <img src="/src/assets/bgWithReviews3.svg" class="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "/src/assets/bg.png";
export default {
  data() {
    return {
      bgImage: bgImage,
    };
  },
};
</script>

<style scoped>
h1,
.h1 {
  font-family: "Gentium Book Plus", serif;
}
</style>
