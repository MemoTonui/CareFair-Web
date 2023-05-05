<template>
  <div>
    <div>
      <in-progress-table :tableData="jobInProgress" :tableHead="tableHead" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InProgressTable from "../tables/InProgressTable.vue";

export default {
  components: { InProgressTable },
  data() {
    return {
      tableHead: [
        "Job Title",
        "Rates Per Hour",
        "location",
        "start date",
        "stop date",
        "Actions",
      ],
    };
  },
  created() {
    this.getJobsInProgress();
  },
  computed: {
    ...mapGetters(["jobInProgress"]),
  },
  methods: {
    ...mapActions(["getJobsInProgress"]),
  },
};
</script>

<style></style>
