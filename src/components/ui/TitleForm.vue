<script setup>
defineProps({
  titleText: {
    type: String,
    default: '',
  },
  subtitleText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="pb-3">
    <h2 class="text-2xl font-semibold">{{ titleText }}</h2>
    <p class="text-sm">{{ subtitleText }}</p>
  </div>
</template>
