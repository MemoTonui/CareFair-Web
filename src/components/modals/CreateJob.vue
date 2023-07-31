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
                <h2 class="font-medium text-blue-400">Job Entry</h2>
                <button class="absolute top-4 right-4">
                  <span class="material-icons" @click="closeModal">close</span>
                </button>
              </div>
            </div>

            <slot>
              <div class="mt-1">
                <TextBox
                  type="text"
                  placeholder="Enter Job Title"
                  label="Job Title:"
                  v-model="jobTitle"
                />
                <TextArea
                  type="text"
                  placeholder="Enter Job Description"
                  label="Job Description"
                  v-model="jobDescription"
                />
                <TextBox
                  type="number"
                  placeholder="Enter Minimum Rate"
                  label="Minimum Rate"
                  v-model="minimumRate"
                />
                <TextBox
                  type="number"
                  placeholder="Enter Maximum Rate"
                  label="Maximum Rate"
                  v-model="maximumRate"
                />
                <TextBox
                  type="number"
                  placeholder="Enter minimum required years of experience"
                  label="Minimum Required Years of Experience:"
                  v-model="minimumExperience"
                />
                <div class="">
                  <div class="mb-2">
                    <label
                      for="textBox"
                      class="form-label text-xs inline-block my-2 text-black"
                      >Country</label
                    >
                    <country-select
                      class="form-control block w-full px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="country"
                      :country="country"
                      topCountry="US"
                    />
                  </div>
                  <div>
                    <label
                      for="textBox"
                      class="form-label text-xs inline-block my-2 text-black"
                      >Region</label
                    >
                    <region-select
                      class="form-control block w-full px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="region"
                      :country="country"
                      :region="region"
                    />
                  </div>
                </div>
                <div>
                  <TagInput
                    label="Enter your Preferred Languages"
                    placeholder="Preferred Languages"
                    :tags="tags"
                    @on-tags-changed="handleChangeTag(tags)"
                  />
                </div>
                <ActionButton
                  v-if="state == 'Edit'"
                  @click="handleEditJob"
                  text="Edit Job"
                  class="mt-2"
                />
                <ActionButton
                  v-else
                  @click="handleCreateJob"
                  text="Create Job"
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
import TextBox from "/src/components/TextBox2.vue";
import TextArea from "/src/components/TextArea2.vue";
import TagInput from "../../components/TagInput.vue";
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
  name: "CreateJobModal",
  props,
  components: { TextBox, ActionButton, TextArea, TagInput },
  //Declare Variables
  data() {
    return {
      id: "",
      jobTitle: "",
      jobDescription: "",
      minimumRate: 0,
      maximumRate: 0,
      minimumExperience: "",
      tags: ["English"],
      country: "",
      region: "",
    };
  },

  //Shows the modal
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
      //node --max_old_space_size=2560 node_modules/.bin/

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
    ...mapActions(["createJob", "editJob"]),
    handleCreateJob() {
      this.createJob({
        title: this.jobTitle,
        description: this.jobDescription,
        minimumRate: this.minimumRate,
        maximumRate: this.maximumRate,
        minimumExperience: this.minimumExperience,
        languages: this.tags,
        country: this.country,
        city: this.region,
        jobOwner: localStorage.getItem("id"),
      });
      this.jobTitle = "";
      this.jobDescription = "";
      this.minimumRate = "";
      this.maximumRate = "";
      this.minimumExperience = "";
      this.tags = "";
      this.country = "";
      this.region = "";
      this.closeModal();
    },
    handleEditJob() {
      this.editJob({
        title: this.jobTitle,
        description: this.jobDescription,
        minimumRate: this.minimumRate,
        maximumRate: this.maximumRate,
        minimumExperience: this.minimumExperience,
        languages: this.tags,
        country: this.country,
        city: this.region,
        jobOwner: localStorage.getItem("id"),
      });
      this.jobTitle = "";
      this.jobDescription = "";
      this.minimumRate = "";
      this.maximumRate = "";
      this.minimumExperience = "";
      this.tags = "";
      this.country = "";
      this.region = "";
      this.closeModal();
    },
    handleChangeTag(tags) {
      this.tags = tags;
    },
  },
};
</script>
<style></style>
