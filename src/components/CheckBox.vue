<template>
  <div class="flex">
    <input
      id="default-checkbox"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @input="(event) => $emit('update:checked', event.target.checked)"
      class="mb-1 text-primary bg-border border-gray-300 focus:ring-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      :for="fieldId"
      class="p-2 text-sm font-medium text-gray-900 dark:text-gray-700"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    label: {
      type: String,
      required: true,
    },
    fieldId: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style></style>
