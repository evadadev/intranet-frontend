<script setup>
defineProps({
  labelName: {
    type: String,
    default: 'Label',
  },
  placeholder: {
    type: String,
    default: 'Enter text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const modelValue = defineModel()
</script>

<template>
  <div class="flex flex-col items-start gap-1 text-sm mt-4">
    <label for="input">{{ labelName }}</label>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full text-gray-600 border border-gray-200 border-solid rounded-sm p-2"
    />
  </div>
</template>
