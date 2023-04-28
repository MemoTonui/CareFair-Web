<template>
  <div
    class="p-3 border border-border my-3 text-sm rounded-md hover:border-primary hover:border-2"
  >
    <div class="text sm flex justify-between mb-2">
      <div>
        <p class="font-semibold">{{ name }}</p>
      </div>
      <div class="text-light">
        <p>{{ timeLeft }}</p>
      </div>
    </div>
    <div class="flex gap-3 my-1 text-xs">
      <p>{{ date }}, {{ time }}</p>
    </div>
    <div class="flex justify-between gap-2 text-xs">
      <div class="my-2">
        <p v-if="cancelled" class="text-pink bg-pink bg-opacity-20 p-1">Cancelled</p>
        <p v-else class="text-secondary bg-opacity-20 bg-secondary p-1">Not Cancelled</p>
      </div>
      <div class="my-2">
        <p v-if="confirmed" class="text-secondary bg-opacity-20 bg-secondary p-1">
          Confirmed
        </p>
        <p v-else class="text-pink bg-pink bg-opacity-20 p-1">Not Confirmed</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterviewsCard",
  props: {
    name: {
      type: String,
      required: true,
    },

    timeLeft: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
