<template>
  <div class="border-border border p-5 rounded-md my-1 cursor-pointer">
    <div class="flex justify-between space-x-4 text-sm">
      <div>
        <div class="flex">
          <div class="space-y-1 dark:text-white">
            <p class="font-semibold my-3 text-xs">
              {{ activityLog }}
            </p>
            <p class="font-semibold">{{ title }}</p>
            <div class="flex">
              <div>
                <p>
                  {{ description }}
                </p>
                <div class="flex grid-cols-4 md:flex-row text-sm my-4 gap-5">
                  <div class="flex gap-2">
                    <span class="material-icons-outlined"> groups </span>
                    <p>{{ attendees }} Attendees</p>
                  </div>
                  <div class="flex gap-2">
                    <span class="material-icons-outlined"> favorite_border </span>
                    <p>{{ likes }} Likes</p>
                  </div>
                  <div class="flex gap-2">
                    <span class="material-icons-outlined"> textsms </span>
                    <p>{{ comments }} Comments</p>
                  </div>
                  <div class="flex gap-2">
                    <span class="material-icons-outlined"> send </span>
                    <p>Share</p>
                  </div>
                  <div class="flex gap-2">
                    <span class="material-icons-outlined"> autorenew </span>
                    <p>Repost</p>
                  </div>
                </div>
              </div>
              <div>
                <img v-if="img" class="w-24 h-24" :src="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm"><span class="material-icons-outlined"> more_horiz </span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
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
    activityLog: {
      type: String,
      required: true,
    },
    attendees: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
