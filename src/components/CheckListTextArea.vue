<template>
  <div class="flex flex-col items-start justify-center my-3 p-4">
    <label for="dropDown" class="form-label text-md inline-block mb-2 text-gray-700">{{
      label
    }}</label>
    <div v-for="option in options" :key="option.value">
      <CheckBox
        :disabled="disabled"
        :checked="value.includes(option.value)"
        @update:checked="check(option.value, $event)"
        :fieldId="option.label"
        :label="option.label"
        :key="option"
      />
      <TextArea
        @input=""
        :value="benefit"
        type="text"
        :placeholder="benefitPlaceHolder"
      />
    </div>
  </div>
</template>

<script>
import Checkbox from "./CheckBox.vue";
import TextArea from "./TextArea2.vue";

export default {
  emits: ["update:value"],
  props: {
    values: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    benefit: {
      type: Array,
      required: true,
    },
    benefitPlaceholder: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) => Object.keys(option).includes("label"));
        const hasIdKey = value.every((option) => Object.keys(option).includes("value"));
        return hasNameKey && hasIdKey;
      },
    },
  },
  emits: ["update:benefit"],
  methods: {
    handleInput($event) {
      this.$emit("update:benefit", $event.target.value);
    },
  },
  setup(props, context) {
    const check = (optionId, checked, benefit) => {
      let updatedValue = [...props.values];
      //let updatedBenefit = [...props.benefit];
      if (checked) {
        updatedValue.push({ optionId, benefit });
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      context.emit("update:value", updatedValue);
    };

    return {
      check,
    };
  },
  components: {
    CheckBox: Checkbox,
    TextArea,
  },
};
</script>
