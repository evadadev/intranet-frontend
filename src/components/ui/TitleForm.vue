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
  <div>
    <h2 class="text-xl font-semibold">{{ titleText }}</h2>
    <p class="text-sm">{{ subtitleText }}</p>
  </div>
</template>
