<template>
  <div class="my-10">
    <div class="my-4">
      <TextBox
        v-model="email"
        type="email"
        placeholder="Enter Your Email"
        label="Enter your Email Address to change your password"
      />
    </div>
    <div class="pt-1 mb-5 mt-2 pb-1 flex justify-between">
      <div></div>
      <div><ActionButton text="Reset Password" @click.prevent="sendEmail" /></div>
    </div>
  </div>
</template>

<script>
import ActionButton from "../../ActionButton.vue";
import Password from "../../Password.vue";
import TextBox from "../../TextBox2.vue";
export default {
  components: { Password, TextBox, ActionButton },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.alertTitle = "Invalid Email Address";
        this.typeOfAlert = "Warning";
        this.alertMessage = "Please type in a valid email address.";
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 5000);
        return;
      }
      this.loading = true;
      this.error = null;
      this.emailSending = true;

      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.loading = false;
          this.emailSending = false;
          console.log("DOOOONEE");
          this.alertTitle = "Password Reset Link ";
          this.typeOfAlert = "Success";
          this.alertMessage = "Password Reset link has been sent";
          this.showAlert = true;
          setTimeout(() => (this.showAlert = false), 5000);
          router.replace({ name: "PasswordResetSuccess" });
        })
        .catch((error) => {
          this.loading = false;
          this.emailSending = false;
          this.error = error.message;
          this.alertTitle = error.message;
          this.typeOfAlert = "Danger";
          this.alertMessage = error.message;
          this.showAlert = true;
          setTimeout(() => (this.showAlert = false), 5000);
        });
    },
  },
};
</script>

<style></style>
