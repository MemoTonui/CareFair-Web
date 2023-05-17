<template>
  <main>
    <div
      class="container items-center justify-center px-6 md:px-12 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
    >
      <div class="mb-10">
        <h1 class="font-semibold text-3xl">Good Morning, Jane Doe</h1>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-5"
        v-if="userInfo.role == 'careGiver'"
      >
        <dashboard-cards
          :number-of-data="customers.numberOfData"
          :name-of-data="customers.name"
          :img_url="customers.icon"
        />
        <dashboard-cards
          :number-of-data="repeatCustomers.numberOfData"
          :name-of-data="repeatCustomers.name"
          :img_url="repeatCustomers.icon"
        />
        <dashboard-cards
          :number-of-data="totalEarnings.numberOfData"
          :name-of-data="totalEarnings.name"
          :img_url="totalEarnings.icon"
        />
        <dashboard-cards
          :number-of-data="currentBalance.numberOfData"
          :name-of-data="currentBalance.name"
          :img_url="currentBalance.icon"
        />
      </div>
      <div class="my-14">
        <div class="my-14 bg-white p-6 shadow-md rounded-md">
          <div
            class="text-sm font-medium text-center text-gray-600 dark:text-gray-400 dark:border-gray-700"
          >
            <ul
              class="flex h-full p-0 m-2 list-none cursor-pointer border-b border-border border-b-3"
            >
              <li
                v-for="menuItem in menuItems"
                :key="menuItem"
                @click="activeTab = menuItem"
                :class="['tab_btn', { selected: activeTab === menuItem }]"
                class="h-full first:ml-0 w-full block p-2 max-w-sm"
              >
                {{ menuItem }}
              </li>
            </ul>
          </div>
          <keep-alive>
            <component :is="activeTab" />
          </keep-alive>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import DashboardCards from "../../components/cards/DashboardCards.vue";
import CompletedJobs from "../../components/menuItems/CompletedJobs.vue";
import InProgress from "../../components/menuItems/InProgress.vue";
import JobOffers from "../../components/menuItems/JobOffers.vue";
import OpenJobs from "../../components/menuItems/OpenJobs.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Jobs",
  components: { DashboardCards, CompletedJobs, OpenJobs, InProgress, JobOffers },
  data() {
    return {
      menuItems: ["OpenJobs", "JobOffers", "InProgress", "CompletedJobs"],
      activeTab: "OpenJobs",
      customers: {
        name: "Total No. of Customers",
        icon: "/src/assets/customers.gif",
        numberOfData: "123",
      },
      repeatCustomers: {
        name: "Total No of Repeat Customers",
        icon: "/src/assets/repeatCustomers.gif",
        numberOfData: "46",
      },
      totalEarnings: {
        name: "Total Earnings",
        icon: "/src/assets/totalEarnings.gif",
        numberOfData: "$ 345",
      },
      currentBalance: {
        name: "Current Balance",
        icon: "/src/assets/currentBalance.gif",
        numberOfData: "$ 38",
      },
    };
  },
  created() {
    this.getUserByFirebase();
    this.handleMenuItem();
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["getUserByFirebase"]),
    handleMenuItem() {
      if (this.userInfo.role == "careGiver") {
        this.menuItems = ["OpenJobs", "JobOffers", "InProgress", "CompletedJobs"];
        this.activeTab = "OpenJobs";
      } else {
        this.menuItems = ["OpenJobs", "InProgress", "CompletedJobs"];
        this.activeTab = "OpenJobs";
      }
    },
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
