<template>
  <main>
    <div
      class="container items-center justify-center px-6 md:px-12 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
    >
      <div class="mb-5">
        <h1 class="font-semibold text-3xl">Interviews</h1>
      </div>

      <div class="my-5">
        <div class="my-5 bg-white p-6">
          <past-interviews />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PastInterviews from "../../components/menuItems/Interviews/PastInterviews.vue";
import UpcomingInterviews from "../../components/menuItems/Interviews/UpcomingInterviews.vue";
export default {
  name: "Jobs",
  components: { PastInterviews, UpcomingInterviews },
  data() {
    return {
      menuItems: ["PastInterviews", "UpcomingInterviews"],
      activeTab: "PastInterviews",
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Gentium Book Plus", serif;
}
.tab-btn {
  padding: 6px 10px;
  background: #ffffff;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 2px solid #cccccc;
  outline: none;
}
.selected {
  border-bottom: 3px solid #0093b8;
}
</style>
