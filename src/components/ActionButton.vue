<template>
  <button
    type="submit"
    class="w-full bg-primary rounded-full cursor-pointer text-white hover:border-2 hover:bg-white hover:text-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <span class="inline-flex py-3 px-4 text-xs font-medium text-center">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "isPrimary"],
  data() {
    return {
      primary: this.isPrimary,
    };
  },
};
</script>
