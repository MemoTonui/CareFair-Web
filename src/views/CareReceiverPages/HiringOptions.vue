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
                        <text-box-2
                          :v-model="jobTitle"
                          label="Title"
                          placeholder="Enter the title of the job"
                          type="text"
                        />
                      </div>
                      <div>
                        <text-area-2
                          :v-model="jobDescription"
                          label="Description"
                          placeholder="Enter the job description"
                          type="text"
                        />
                      </div>
                      <div class="flex justify-between mt-5">
                        <div></div>
                        <div>
                          <router-link :to="{ name: 'ContractTerms' }"
                            ><ActionButton text="Proceed"
                          /></router-link>
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
import TextBox2 from "../../components/TextBox2.vue";
import TextArea2 from "../../components/TextArea2.vue";
export default {
  components: { AccountCard, ActionButton, Dropdown, TextBox2, TextArea2 },
  data() {
    return {
      option: "",
      jobTitle: "",
    };
  },
  methods: {
    ...mapActions(["editUserProfile", "getUserByFirebase"]),
    changeUserProfileAccount() {
      this.editUserProfile({
        role: this.role,
      });
      router.push({ name: "CaregiverProfile" });
      console.log(this.role);
    },
    handleChangeRole(selectedRole) {
      this.role = selectedRole;
      console.log(this.role);
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    this.getUserByFirebase();
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
