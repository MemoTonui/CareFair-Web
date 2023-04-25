<template>
  <div
    class="w-full bg-white hover:border hover:border-primary hover:border-t-4 hover:border-spacing-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
  >
    <div class="flex flex-col items-center justify-center pb-10">
      <img class="w-24 h-24 my-3" :src="img_url" alt="Bonnie image" />
      <div class="text-center px-2">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ title }}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img_url: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style></style>
