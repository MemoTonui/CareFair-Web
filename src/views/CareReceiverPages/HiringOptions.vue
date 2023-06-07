<template>
  <main>
    <div class="justify-center h-full g-6 text-black">
      <div class="mb-12 md:mb-0">
        <div class="md:p-12 md:mx-2 flex justify-center items-center">
          <div
            class="bg-white w-8/12 shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3 m-5"
          >
            <div class="">
              <h4 class="text-4xl font-semibold text-black md:text-3xl mt-1 mb-2 pb-1">
                Hire Jane Doe
              </h4>

              <p class="text-sm">Select an option from below</p>
            </div>
            <div class="gap-1 mt-4 grid">
              <div class="my-4">
                <div class="">
                  <input
                    v-model="option"
                    class="hidden"
                    id="pick_job"
                    type="radio"
                    name="radio"
                    v-bind:value="'pick_job'"
                  />
                  <label
                    class="flex flex-col rounded-md p-4 border-2 border-border cursor-pointer"
                    for="pick_job"
                  >
                    <span class="text-md font-medium">Pick a Job</span>
                    <div class="mt-5" v-if="option == 'pick_job'">
                      <dropdown label="Select a Job" :v-model="job" select="Select Job" />
                      <div class="flex justify-between mt-5">
                        <div></div>
                        <div><ActionButton text="Proceed" /></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="my-4">
                <div class="">
                  <input
                    v-model="option"
                    class="hidden"
                    id="new_job"
                    type="radio"
                    name="radio"
                    v-bind:value="'new_job'"
                  />
                  <label
                    class="flex flex-col rounded-md p-4 border-2 border-border cursor-pointer"
                    for="new_job"
                  >
                    <span class="text-md font-medium">Create New Job</span>
                    <div v-if="option == 'new_job'">
                      <div class="mt-5">
                        <text-box
                          v-model="jobTitle"
                          label="Title"
                          placeholder="Enter the title of the job"
                          type="text"
                        />
                      </div>
                      <div>
                        <text-area
                          v-model="jobDescription"
                          label="Description"
                          placeholder="Enter the job description"
                          type="text"
                        />
                      </div>
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
                      <div class="flex justify-between mt-5">
                        <div></div>
                        <div>
                          <ActionButton text="Proceed" @click.prevent="handleCreateJob" />
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import router from "/src/router";
import ActionButton from "../../components/ActionButton.vue";
import AccountCard from "/src/components/cards/AccountCard.vue";
import Dropdown from "../../components/Dropdown.vue";
import TextBox from "../../components/TextBox2.vue";
import TextArea from "../../components/TextArea2.vue";
import TagInput from "../../components/TagInput.vue";

export default {
  components: { AccountCard, ActionButton, Dropdown, TextBox, TextArea, TagInput },
  data() {
    return {
      option: "",
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
  methods: {
    ...mapActions(["createJob"]),
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
    },
  },
  computed: {
    ...mapGetters(["createdJob"]),
  },
};
</script>

<style scoped>
h4 {
  font-family: "Gentium Book Plus", serif;
}
input:checked + label {
  border-color: #0093b8;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
input[type="radio"]:checked + label {
  border-color: #0093b8;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
