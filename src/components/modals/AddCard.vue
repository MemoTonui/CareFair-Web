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
                <h2 class="font-medium text-blue-400">Add Card</h2>
                <button class="absolute top-4 right-4">
                  <span class="material-icons" @click="closeModal">close</span>
                </button>
              </div>
            </div>

            <slot>
              <div class="mt-5">
                <TextBox
                  type="text"
                  placeholder="Enter Card Holder's Name"
                  label="Card Holder Name:"
                  v-model="cardHolderName"
                />
                <TextBox
                  type="number"
                  placeholder="1234 1234 1234 1234"
                  label="Card Number:"
                  v-model="cardNumber"
                />
                <div class="flex justify-between gap-3">
                  <TextBox
                    type="number"
                    placeholder="Enter CVV"
                    label="CVV"
                    v-model="cvv"
                  />
                  <TextBox
                    type="month"
                    placeholder="Enter Expiry"
                    label="Expiry"
                    v-model="expiry"
                  />
                </div>

                <ActionButton @click="handleCreateCard()" text="Add Card" class="mt-2" />
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
      cardNumber: "",
      expiry: "",
      cvv: "",
      cardHolderName: "",
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
    ...mapActions(["addCard"]),
    handleCreateCard() {
      const userId = localStorage.getItem("id");
      this.addCard({
        cardNumber: this.cardNumber,
        cardHolderName: this.cardHolderName,
        cvv: this.cvv,
        expiry: this.expiry,
        user: userId,
      });
      this.cardHolderName = "";
      this.cardNumber = "";
      this.cvv = "";
      this.expiry = "";
      this.closeModal();
    },
  },
};
</script>

<style></style>
