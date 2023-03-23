<template>
  <div class="flex mb-3">
    <div class="w-full">
      <label for="textBox" class="form-label text-xs inline-block my-2 text-black">{{
        label
      }}</label>
      <input
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        class="form-control block w-96 px-5 py-2 text-xs font-normal text-black bg-white bg-clip-padding border border-solid border-border rounded-sm transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
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
