<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      v-if="showModal"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div class="flex items-start justify-center min-h-screen pt-24 text-center">
        <transition
          enter-active-class="transition ease-out duration-300 transform "
          enter-from-class="opacity-0 translate-y-10 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
        >
          <div
            class="relative bg-white rounded-sm text-left overflow-hidden shadow-xl p-8"
            role="dialog"
            ref="modal"
            aria-modal="true"
            v-show="showModal"
            aria-labelledby="modal-headline"
          >
            <div class="border-b border-border">
              <div class="p-3">
                <h2 class="font-medium text-blue-400">Create Event</h2>
                <button class="absolute top-4 right-4">
                  <span class="material-icons" @click="closeModal">close</span>
                </button>
              </div>
            </div>

            <slot>
              <div>
                <TextArea
                  type="text"
                  placeholder="Enter Description"
                  label="Description:"
                  v-model="description"
                />
                <TextBox
                  type="date"
                  placeholder="Enter  Date"
                  label="Date"
                  v-model="date"
                />
                <TextBox
                  type="time"
                  placeholder="Enter Start Time"
                  label="Start Time"
                  v-model="start_time"
                />
                <TextBox
                  type="time"
                  placeholder="Enter End Time"
                  label="End Time"
                  v-model="end_time"
                />

                <ActionButton
                  @click="handleCreateEvent()"
                  text="Create Event"
                  class="mt-2"
                />
              </div>
            </slot>
          </div>
        </transition>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, watch } from "vue";
import { mapActions } from "vuex";
import TextBox from "/src/components/TextBox.vue";
import ActionButton from "/src/components/ActionButton.vue";
import TextArea from "/src/components/TextArea.vue";

const props = {
  show: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String,
    required: true,
  },
  currentQualityAssuranceForm: {
    type: Object,
    required: false,
    default: {},
  },
};
export default {
  name: "CreateEventModal",
  props,
  components: { TextBox, ActionButton, TextArea },
  data() {
    TextArea;
    return {
      id: "",
      description: "",
      date: "",
      start_time: "",
      end_time: "",
    };
  },
  setup(props) {
    const showModal = ref(false);

    function closeModal() {
      showModal.value = false;
    }

    watch(
      () => props.show,
      (show) => {
        showModal.value = show;
      }
    );

    return {
      closeModal,
      showModal,
    };
  },

  methods: {
    ...mapActions(["addCalendarItem"]),
    handleCreateEvent() {
      const formattedStartTime = new Date().valueOf(this.start_time);
      const formattedEndTime = new Date().valueOf(this.end_time);
      const formattedDate = new Date().valueOf(this.date);

      const userId = localStorage.getItem("id");
      this.addCalendarItem({
        description: this.description,
        date: formattedDate,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        user: userId,
      });
      this.description = "";
      this.date = "";
      this.start_time = "";
      this.end_time = "";
      this.closeModal();
    },
  },
};
</script>

<style></style>
