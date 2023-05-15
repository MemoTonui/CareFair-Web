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
            <div class="">
              <div class="p-3 my-4 border-b border-border">
                <h2 class="font-semibold text-blue-400">Setup Interview</h2>
                <button class="absolute top-4 right-4">
                  <span class="material-icons" @click="closeModal">close</span>
                </button>
              </div>
            </div>

            <slot>
              <div>
                <TextBox
                  type="date"
                  placeholder="MM/dd/YY"
                  label="Please propose a date for the interview"
                  v-model="date"
                />
                <TextBox
                  type="time"
                  placeholder="9:00 AM"
                  label="Select Appropriate time for the interview"
                  v-model="time"
                />
                <Dropdown
                  label="Select your preffered platform for the interview"
                  :options="interviewPlatforms"
                  select="Select Platform"
                  v-model="platform"
                />

                <ActionButton
                  @click="handleCreateInterview()"
                  text="Confirm Interview"
                  class="mt-5"
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
import Dropdown from "../Dropdown.vue";

const props = {
  show: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String,
    required: true,
  },
  caregiver: {
    type: String,
    required: true,
  },

  jobPost: {
    type: String,
    required: true,
  },
};
export default {
  name: "CreateInterviewModal",
  props,
  components: { TextBox, ActionButton, TextArea, Dropdown },
  data() {
    TextArea;
    return {
      date: "",
      time: "",
      platform: "",
      interviewPlatforms: [
        { label: "Phone Call", value: "Phone call" },
        { label: "Web Conference", value: "Web conference" },
        { label: "Physical Meeting", value: "Physical meeting" },
      ],
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
    ...mapActions(["createInterview"]),
    handleCreateInterview() {
      const formattedTime = new Date().valueOf(this.time);
      const formattedDate = new Date().valueOf(this.date);

      const userId = localStorage.getItem("id");
      this.createInterview({
        date: formattedDate,
        time: formattedTime,
        platform: this.platform,
        confirmed: false,
        careGiver: this.caregiver,
        careReceiver: userId,
        jobPost: this.jobPost,
      });
      this.date = "";
      this.time = "";
      this.platform = "";
      this.closeModal();
    },
  },
};
</script>

<style></style>
