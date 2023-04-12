<template>
  <div class="flex m-2">
    <input
      :id="label"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @input="(event) => $emit('update:checked', event.target.checked)"
      class="mb-1 hidden text-primary bg-border border-gray-300 focus:ring-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      :for="fieldId"
      class="flex flex-col border-2 font-semibold sm:p-1 border-border cursor-pointer"
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

<style scoped>
input:checked + label {
  border-color: #0093b8;
  background-color: #0093b8;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
