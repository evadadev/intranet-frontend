<script setup lang="ts">
interface Props {
  labelText?: string
  options: Option[]
}

interface Option {
  textOption: string
  valueOption: string
}

const props = withDefaults(defineProps<Props>(), {
  labelText: '',
  options: () => [],
})

const modelValue = defineModel('modelValue', {
  type: String,
  default: '',
})
</script>

<template>
  <label for="estado_civil" class="flex flex-col items-start gap-1 text-sm mt-4">{{
    labelText
  }}</label>
  <select
    class="w-full text-gray-600 border border-gray-200 border-solid rounded-sm p-2"
    v-model="modelValue"
  >
    <option v-for="option in options" :value="option.valueOption">{{ option.textOption }}</option>
  </select>
</template>
