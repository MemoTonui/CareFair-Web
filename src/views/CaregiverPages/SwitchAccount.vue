<template>
  <main>
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-black">
      <div
        class="xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-8/12 sm:w-4/12 mb-12 md:mb-0 flex items-center justify-center"
      >
        <div class="md:p-12 md:mx-2">
          <div
            class="block bg-white shadow-lg rounded-lg py-10 md:py-10 md:px-10 px-3 m-5"
          >
            <div class="text-center">
              <h4 class="text-2xl font-bold text-black md:text-3xl mt-1 mb-4 pb-1">
                Let’s Setup your Account!
              </h4>

              <p class="text-sm">Who do you want to set up an account as?</p>
            </div>
            <div class="md:flex gap-10 my-10 justify-between sm:grid-cols-1">
              <div class="">
                <input
                  v-model="role"
                  class="hidden"
                  id="caregiver"
                  type="radio"
                  name="radio"
                  v-bind:value="'caregiver'"
                  checked
                />
                <div
                  class="w-full bg-white hover:border hover:border-primary hover:border-t-4 hover:border-spacing-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                >
                  <div class="flex flex-col items-center justify-center pb-10">
                    <img
                      class="w-24 h-24 my-3"
                      src="/src/assets/caregiver.gif"
                      alt="Caregiver Image"
                    />

                    <label
                      class="flex items-center flex-col justify-center cursor-pointer p-2"
                      for="caregiver"
                    >
                      <span class="text-md font-bold">Caregiver</span>
                      <span class="text-sm mt-2 text-center"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="">
                <input
                  v-model="role"
                  class="hidden"
                  id="carereceiver"
                  type="radio"
                  name="radio"
                  v-bind:value="'carereceiver'"
                />
                <div
                  class="w-full bg-white hover:border hover:border-primary hover:border-t-4 hover:border-spacing-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                >
                  <div class="flex flex-col items-center justify-center pb-10">
                    <img
                      class="w-24 h-24 my-3"
                      src="/src/assets/carereceiver.gif"
                      alt="Care Receiver Image"
                    />

                    <label
                      class="flex items-center flex-col justify-center cursor-pointer p-2"
                    >
                      <span class="text-md font-bold">Care Receiver</span>
                      <span class="text-sm mt-2 text-center"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ActionButton text="Proceed" @click.prevent="changeUserProfileAccount" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ role }}
  </main>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import router from "/src/router";
import ActionButton from "../../components/ActionButton.vue";
import AccountCard from "/src/components/cards/AccountCard.vue";
export default {
  components: { AccountCard, ActionButton },
  data() {
    return {
      role: "caregiver",
    };
  },
  methods: {
    ...mapActions(["editUserProfile", "getUserByFirebase"]),
    changeUserProfileAccount() {
      this.editUserProfile({
        role: this.role,
      });
      router.push({ name: "CareType" });
      console.log(this.role);
    },
  },
  mounted() {
    this.getUserByFirebase();
  },
};
</script>

<style scoped>
input:checked + label {
  border-color: #0093b8;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
