<template>
  <div
    class="container items-center justify-center px-6 md:px-48 mx-auto space-y-0 py-10 md:space-y-0 md:flex-row"
  >
    {{ events }}
    Calendar: {{ calendarItems }}
    <div class="flex justify-between my-5">
      <div class="mb-10">
        <h1 class="font-semibold text-3xl">Calendar</h1>
      </div>
      <div @click="showCreateEventModal = !showCreateEventModal">
        <span
          class="material-icons-outlined bg-primary rounded-full p-3 text-white cursor-pointer hover:bg-white hover:text-primary hover:border hover:border-primary"
        >
          add
        </span>
      </div>
    </div>

    <Qalendar :events="events" />

    <CreateEvent :show="showCreateEventModal" />
  </div>
</template>

<script>
import { Qalendar } from "qalendar";
import { mapActions, mapGetters, mapState } from "vuex";
import { ref, watch } from "vue";
import CreateEvent from "../../components/modals/CreateEvent.vue";

export default {
  components: {
    Qalendar,
    CreateEvent,
  },
  data() {
    return {
      events: [],
      /*  events: [
        // ...
        {
          title: "Advanced algebra",
          with: "Chandler Bing",
          time: { start: "2023-05-16 12:05", end: "2023-05-16 13:35" },
          color: "yellow",
          isEditable: true,
          id: "753944708f0f",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
        },
        {
          title: "Ralph on holiday",
          with: "Rachel Greene",
          time: { start: "2023-05-10", end: "2023-05-22" },
          color: "green",
          isEditable: true,
          id: "5602b6f589fc",
        },
        // ...
      ],*/
    };
  },
  created() {
    this.restructureCalendarItems();
  },

  computed: {
    ...mapGetters(["calendarItems", "items"]),
  },
  methods: {
    ...mapActions(["getUsersCalendarItems"]),
    restructureCalendarItems() {
      this.getUsersCalendarItems();
      console.log(this.calendarItems);
      this.events = this.calendarItems.map((item) => {
        let dateStr =
          new Date(item.date).getFullYear() +
          "-" +
          "0" +
          (new Date(item.date).getMonth() + 1) +
          "-" +
          new Date(item.date).getDate();

        return {
          title: item.description,
          time: {
            start: dateStr + " " + new Date(item.startTime).toLocaleTimeString(),
            end: dateStr + " " + new Date(item.endTime).toLocaleTimeString(),
          },
          color: "yellow",
          isEditable: true,
          id: item._id,
          description: item.description,
        };
      });
      console.log(this.events);

      /*this.calendarItems.forEach((item) => {
        console.log(item);
        title = item.description;
        time = { start: "2023-05-16 12:05", end: "2023-05-16 13:35" };
        color = "yellow";
        isEditable = true;
        id = "753944708f0f";
        description =
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!";
        this.events.push(item);
      });*/
    },
  },
  setup() {
    const showCreateEventModal = ref(false);

    return {
      showCreateEventModal,
    };
  },
};
</script>

<style>
@import "qalendar/dist/style.css";
</style>
