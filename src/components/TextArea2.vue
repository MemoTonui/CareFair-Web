<template>
  <div>
    <label class="block my-3 text-xs font-medium text-black dark:text-gray-400">{{
      label
    }}</label>
    <textarea
      :disabled="disabled"
      rows="3"
      class="block p-2.5 w-full text-xs text-black rounded-sm border border-border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
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
