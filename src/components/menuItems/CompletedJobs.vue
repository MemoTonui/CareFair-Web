<template>
  <div>
    <div>
      <in-progress-table :tableData="jobsComplete" :tableHead="tableHead" />
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
      tableHead: ["Job Title", "Rates Per Hour", "location", "start date", "stop date"],
    };
  },
  created() {
    this.getCompleteJobs();
  },
  computed: {
    ...mapGetters(["jobsComplete"]),
  },
  methods: {
    ...mapActions(["getCompleteJobs"]),
  },
};
</script>

<style></style>
