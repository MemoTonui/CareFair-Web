<template>
  <div>
    <div v-if="Object.keys(cards).length <= 0" class="flex justify-center p-4">
      You don't have any cards to view.
    </div>
    <div v-for="card in cards" :key="card._id">
      <payment-method-card :cardNumber="card.cardNumber" />
    </div>

    <div class="flex justify-between mt-10">
      <div></div>
      <div>
        <action-button text="Add Card" @click="showAddCardModal = !showAddCardModal" />
      </div>
    </div>
    <add-card :show="showAddCardModal" />
  </div>
</template>

<script>
import ActionButton from "../../ActionButton.vue";
import AddCard from "../../modals/AddCard.vue";
import { mapActions, mapGetters } from "vuex";
import { ref, watch } from "vue";
import PaymentMethodCard from "../../cards/PaymentMethodCard.vue";

export default {
  components: { ActionButton, AddCard, PaymentMethodCard },
  setup() {
    const showAddCardModal = ref(false);

    return {
      showAddCardModal,
    };
  },
  created() {
    this.getUsersCards();
  },
  /*updated() {
    this.getUserByFirebase();
  },*/
  computed: {
    ...mapGetters(["cards"]),
  },
  methods: {
    ...mapActions(["getUsersCards"]),
  },
};
</script>

<style></style>
