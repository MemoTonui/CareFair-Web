<template>
  <main>
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div
        class="xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-8/12 sm:w-4/12 mb-12 md:mb-0 flex items-center justify-center"
      >
        <div class="md:p-12 md:mx-2">
          <div
            class="block bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3 m-5"
          >
            <div class="">
              <h4 class="text-2xl font-bold text-black md:text-3xl mt-1 mb-4 pb-1">
                What kind of care do you provide?
              </h4>

              <p class="text-sm">
                What kind of care do you provide or do you have experience with?
              </p>
            </div>
            <div class="md:flex gap-10 my-10 justify-between sm:grid-cols-1">
              <CareTypeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CareTypeCard from "../../components/CareTypeCard.vue";
export default {
  components: { CareTypeCard },
};
</script>

<style></style>
