<template>
  <div class="my-10">
    <div class="my-4">
      <dropdown
        :options="timeZone"
        label="Time Zone"
        :model-value="zone"
        select="Select Time Zone"
      />
    </div>
    <div class="my-4">
      <dropdown
        :options="phoneNumbers"
        label="Which verified number would you like to use for text alerts? Update Number"
        :model-value="phoneNumber"
        select="Select Verified Phone Number"
      />
    </div>
    <div class="flex justify-between mt-10">
      <div></div>
      <div><action-button text="Save Settings" /></div>
    </div>
  </div>
</template>

<script>
import ActionButton from "../../ActionButton.vue";
import Dropdown from "../../Dropdown.vue";
export default {
  name: "GeneralSettings",
  components: { Dropdown, ActionButton },
  data() {
    return {
      timeZone: [
        { label: "UHT", value: "UHT" },
        { label: "EAT", value: "EAT" },
        { label: "GMT", value: "GMT" },
      ],
      zone: "",
      phoneNumber: "",
      phoneNumbers: [
        { label: "+1 789 456 123", value: "+1 789 456 123" },
        { label: "+1 789 456 123", value: "+1 789 456 123" },
        { label: "+1 789 456 123", value: "+1 789 456 123" },
      ],
    };
  },
};
</script>

<style></style>
