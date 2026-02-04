<script setup lang="ts">
interface Props {
  labelName?: string
  placeholder?: string
  disabled?: boolean
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  labelName: 'Label',
  placeholder: 'Enter text',
  disabled: false,
  type: 'text',
})

const modelValue = defineModel('modelValue', {
  type: String,
  default: '',
})
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
