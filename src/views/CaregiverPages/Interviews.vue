<template>
  <main>
    <div
      class="container items-center justify-center px-6 md:px-12 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
    >
      <div class="mb-10">
        <h1 class="font-semibold text-3xl">Interviews</h1>
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
