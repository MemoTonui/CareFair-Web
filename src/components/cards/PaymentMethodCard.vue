<template>
  <div
    class="flex justify-between p-2 border border-border my-3 text-sm rounded-md hover:border-primary hover:border-2"
  >
    <div class="text sm p-1 mb-2">
      <img src="/src/assets/credit-card.png" class="h-12" alt="Credit Card" />
    </div>
    <div class="flex justify-center items-center masked">
      {{ cardNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentMethodCard",
  props: {
    cardNumber: {
      type: String,
      required: true,
    },
    maskedNumber: {
      type: String,
      required: true,
    },
  },
  created() {
    this.maskCard(this.cardNumber);
  },
  methods: {
    maskCard(num) {},
  },
};
</script>

<style></style>
