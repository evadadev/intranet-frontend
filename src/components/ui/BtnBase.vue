<script setup>
defineProps({
  textBtn: {
    type: String,
    default: 'Button',
  },
})
</script>

<template>
  <button
    type="button"
    class="mb-2 rounded-sm bg-[#2b7fff] text-white cursor-pointer hover:opacity-80"
  >
    {{ textBtn }}
  </button>
</template>
