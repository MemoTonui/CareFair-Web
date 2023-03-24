<template>
  <div class="flex mb-3 mr-5">
    <div class="w-full">
      <label for="textBox" class="form-label text-xs inline-block my-2 text-black"
        >Password</label
      >
      <div class="relative flex">
        <input
          :type="show ? 'password' : 'text'"
          placeholder="Enter your password"
          :value="modelValue"
          class="form-control block w-full px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
          @input="handleInput"
        />
        <span
          @click="show = !show"
          :class="{ hidden: !show, block: show }"
          class="material-icons absolute text-center right-0 text-sm mx-2 my-1 text-black cursor-pointer"
          >visibility</span
        >
        <span
          @click="show = !show"
          :class="{ block: !show, hidden: show }"
          class="material-icons inline-flex absolute text-center right-0 text-sm mx-2 my-1 text-black cursor-pointer"
          >visibility_off</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Password",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<style></style>
