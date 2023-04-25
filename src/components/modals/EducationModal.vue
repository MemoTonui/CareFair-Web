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
                <h2 class="font-medium text-blue-400">Education Entry</h2>
                <button class="absolute top-4 right-4">
                  <span class="material-icons" @click="closeModal">close</span>
                </button>
              </div>
            </div>

            <slot>
              <div class="mt-1">
                <TextBox
                  type="text"
                  placeholder="Enter Institution Name"
                  label="Institution Name:"
                  v-model="name"
                />
                <TextBox
                  type="text"
                  placeholder="Enter Degree or Field of Study"
                  label="Degree"
                  v-model="degree"
                />
                <TextBox
                  type="date"
                  placeholder="Enter Start Date"
                  label="Start Date"
                  v-model="start_date"
                />
                <TextBox
                  type="date"
                  placeholder="Enter End Date"
                  label="End Date"
                  v-model="end_date"
                />
                <ActionButton
                  v-if="state == 'Edit'"
                  @click="handleEditEducation"
                  text="Edit Education"
                  class="mt-2"
                />
                <ActionButton
                  v-else
                  @click="handleCreateEducation"
                  text="Add Education"
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
  name: "EducationModal",
  props,
  components: { TextBox, ActionButton },
  data() {
    return {
      id: "",
      name: "",
      degree: "",
      start_date: "",
      end_date: "",
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
  updated() {
    if (this.state == "Edit") {
      this.id = this.currentQualityAssuranceForm.id;
      this.name = this.currentQualityAssuranceForm.name;
      this.description = this.currentQualityAssuranceForm.description;
    } else {
      this.id = "";
      this.name = "";
      this.description = "";
    }
  },
  methods: {
    ...mapActions(["addEducation"]),
    handleCreateEducation() {
      const formattedStartDate = new Date().valueOf(this.start_date);
      const formattedEndDate = new Date().valueOf(this.end_date);
      this.addEducation({
        school: this.name,
        degree: this.degree,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      });
      this.name = "";
      this.degree = "";
      this.start_date = "";
      this.end_date = "";
      this.closeModal();
    },
    handleEditEducation() {
      const formattedStartDate = new Date().valueOf(this.start_date);
      const formattedEndDate = new Date().valueOf(this.end_date);
      this.editUserProfile({
        education: [
          {
            school: this.name,
            degree: this.degree,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          },
        ],
      });
      this.name = "";
      this.degree = "";
      this.start_date = "";
      this.end_date = "";
      this.closeModal();
    },
  },
};
</script>

<style></style>
