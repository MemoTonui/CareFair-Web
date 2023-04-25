<template>
  <div class="rounded-md shadow-md p-2">
    <div>
      <div class="flex justify-between">
        <div class="p-2">
          <h2 class="text-sm font-normal">{{ nameOfData }}</h2>
        </div>
        <div class="align-middle">
          <img class="w-8 h-8 my-3" :src="img_url" alt="Bonnie image" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="p-1">
          <h2 class="font-semibold text-lg m-2 text-slate-700 align-center">
            {{ numberOfData }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCards",
  props: {
    numberOfData: { type: Number, required: true },
    nameOfData: { type: String, required: true },
    img_url: { type: String, required: true },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style></style>
