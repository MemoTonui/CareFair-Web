<template>
  <div style="width: 100%" class="fixed">
    <LvProgressBar mode="indeterminate" color="#0093B8" />
  </div>
</template>

<script>
import LvProgressBar from "lightvue/progress-bar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loader",
  components: {
    LvProgressBar,
  },
};
</script>

<style scoped></style>
