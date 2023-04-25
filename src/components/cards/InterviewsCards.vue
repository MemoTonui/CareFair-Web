<template>
  <div
    class="p-2 border border-border my-3 text-sm rounded-md hover:border-primary hover:border-2"
  >
    <div class="text sm p-1 flex justify-between mb-2">
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
    <div class="my-2">
      <p v-if="status == 'Unconfirmed'" class="text-pink">{{ status }}</p>
      <p v-else class="text-secondary">{{ status }}</p>
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
