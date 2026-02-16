<script setup lang="ts">
interface Props {
  titleText?: string
  subtitleText?: string
}
const props = withDefaults(defineProps<Props>(), {
  titleText: '',
  subtitleText: '',
})
</script>

<template>
  <div class="pb-3">
    <h2 class="text-2xl font-semibold">{{ titleText }}</h2>
    <p class="text-sm">{{ subtitleText }}</p>
  </div>
</template>
