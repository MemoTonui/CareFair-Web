<template>
  <div class="my-10">
    <div class="my-4">
      <TextBox
        v-model="password"
        type="password"
        placeholder="Enter Current Password"
        label="Current Password"
      />
    </div>
    <div class="my-4">
      <TextBox
        v-model="password"
        type="password"
        placeholder="Enter New Password"
        label="New Password"
      />
    </div>
    <div class="my-4">
      <TextBox
        v-model="password"
        type="password"
        placeholder="Confirm your New Password"
        label="Confirm New Password"
      />
    </div>
  </div>
</template>

<script>
import Password from "../../Password.vue";
import TextBox from "../../TextBox2.vue";
export default {
  components: { Password, TextBox },
  data() {
    return {
      password: "",
    };
  },
};
</script>

<style></style>
