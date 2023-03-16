<template>
  <div>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="
        background-position: 50%;

        background-image: url('https://i.ibb.co/LdJYdXX/alexander-dummer-UH-xs-Fiz-Tk-unsplash-1.png');
        height: 600px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.25)"
      >
        <div class="flex items-center h-full">
          <div class="text-white px-6 md:px-12">
            <div class="mb-12">
              <h1 class="text-xl md:text-2xl xl:text-4xl mb-3 font-bold">
                Experience Compassionate <br /><span class="my-4">
                  and professional care for your</span
                >
                <br /><span> loved ones. </span>
              </h1>
              <p>Get a Professional Now!</p>
            </div>
            <a
              class="inline-block px-5 py-3 mr-1.5 border-2 border-primary bg-primary text-white font-semibold text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
              >Get a Caregiver</a
            >
            <a
              class="inline-block sm:mt-3 px-5 py-3 border-2 border-pink bg-pink text-white font-semibold text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition hover:bg-opacity-5 duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
              >Become a Caregiver</a
            >
          </div>
        </div>
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

<style></style>
