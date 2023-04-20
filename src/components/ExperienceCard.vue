<template>
  <div class="border-border border p-5 rounded-md my-1 cursor-pointer">
    <div class="flex justify-between space-x-4 text-sm">
      <div>
        <div class="flex">
          <div>
            <img v-if="img" class="w-10 h-10 rounded-full mr-2" :src="img" alt="" />
          </div>
          <div class="space-y-1 dark:text-white">
            <p class="uppercase font-semibold">
              {{ title }}
            </p>
            <p>
              {{ description }}
            </p>
            <p>{{ description2 }}</p>
          </div>
        </div>
      </div>
      <div class="text-sm">
        <span
          class="material-icons-outlined bg-dark-pink bg-opacity-20 text-dark-pink rounded-full p-1 text-sm"
        >
          delete
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style></style>
