<template>
  <div>
    <h1 class="mb-6 text-3xl font-bold">HOME</h1>
    <p class="mb-6">Name is store is {{ name }}</p>

    <input
      v-model="newName"
      type="text"
      class="p-2 mr-4 border border-gray-600 rounded"
    />

    <button @click="saveName" class="p-2 text-white bg-slate-800 rounded">Submit</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
const store = useStore();
const name = computed(() => {
  return store.state.user.name;
});
const router = useRouter();
const newName = ref("");

function saveName() {
  store.dispatch("saveName", newName.value);
  newName.value = "";
  router.push("/about");
}
</script>
