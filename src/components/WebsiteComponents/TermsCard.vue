<template>
  <div>
    <h2 class="text-4xl font-bold dark:text-white">{{ title }}</h2>
    <p class="my-4 text-sm text-black">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
};
</script>

<style></style>
