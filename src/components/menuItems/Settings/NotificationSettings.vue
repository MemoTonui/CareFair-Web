<template>
  <div class="my-10">
    <h5 class="font-semibold text-sm">Emails</h5>

    <div class="flex justify-between my-5">
      <div>
        <p class="text-sm">Send me an email when I get a new message or request.</p>
      </div>
      <div>
        <toggle-button v-model="messageValue" />
      </div>
    </div>

    <div class="flex justify-between my-5">
      <div>
        <p class="text-sm">Receive marketing emails from CareFair.</p>
      </div>
      <toggle-button v-model="emailValue" />
    </div>

    <div class="flex justify-between mt-10">
      <div></div>
      <div><action-button text="Save Settings" /></div>
    </div>
  </div>
</template>

<script>
import ActionButton from "../../ActionButton.vue";
import ToggleButton from "../../ToggleButton.vue";
export default {
  components: { ActionButton, ToggleButton },
  data() {
    return {
      emailValue: false,
      messageValue: true,
    };
  },
};
</script>

<style></style>
