<template>
  <div
    class="p-2 border border-border my-3 text-sm rounded-md hover:border-primary hover:border-2"
  >
    <div class="text sm p-1 flex justify-between mb-2">
      <div>
        <p class="font-semibold">{{ jobTitle }}</p>
      </div>
      <div class="text-light">
        <p>{{ datePosted }}</p>
      </div>
    </div>
    <div class="flex gap-3 my-1 text-xs">
      <span class="material-icons-outlined text-xs"> location_on </span>
      <p>{{ city }}, {{ country }}</p>
    </div>
    <div class="my-2">
      <p>{{ jobDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    jobTitle: {
      type: String,
      required: true,
    },
    datePosted: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
