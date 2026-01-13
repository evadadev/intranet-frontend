<script setup>
defineProps({
  errorText: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div>
    <p v-if="errorText" class="text-red-600 flex justify-end text-sm mt-1">
      {{ errorText }}
    </p>
  </div>
</template>
