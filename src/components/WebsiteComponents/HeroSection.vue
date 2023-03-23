<template>
  <div id="hero" class="">
    <!-- Flex Container -->
    <div
      class="container flex flex-col-reverse place-items-center items-center justify-center px-6 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
    >
      <!-- Left item -->
      <div class="flex flex-col justify-center space-y-12 px-10 py-10 md:w-1/2">
        <h1
          class="max-w-md text-4xl font-bold text-black text-center md:text-5xl md:text-left"
        >
          Experience Compassionate and professional care for your loved ones.
        </h1>
        <p class="max-w-md text-black md:text-left">
          Take the first step towards providing your loved one with compassionate and
          professional care.
        </p>
        <div class="flex justify-center md:justify-start uppercase gap-6">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white text-sm bg-primary rounded-full baseline hover:border-2 hover:text-primary hover:bg-white"
            >Get a Caregiver</a
          >
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white text-sm bg-pink rounded-full baseline hover:border-2 hover:text-pink hover:bg-white"
            >Become a Caregiver</a
          >
        </div>
      </div>
      <!-- Image -->
      <div class="md:w-1/2">
        <img src="/src/assets/bgImage.png" alt="" />
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

<style>
h1 {
  font-family: "Gentium Book Plus", serif;
}
</style>
