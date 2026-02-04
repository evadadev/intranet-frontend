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
    <h2 class="text-3xl font-bold">{{ props.titleText }}</h2>
    <p class="text-sm">{{ props.subtitleText }}</p>
  </div>
</template>
