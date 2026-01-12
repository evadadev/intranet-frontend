<script setup>
defineProps({
  labelName: {
    type: String,
    default: 'campo requerido o erroneo',
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
</script>
<template>
  <div>
    <p v-if="labelName && disabled === true" class="text-red-600 flex justify-end text-sm mt-1">
      {{ labelName }}
    </p>
  </div>
</template>
