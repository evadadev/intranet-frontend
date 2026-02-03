<script setup lang="ts">
interface Props {
  errorText?: string
}

const props = withDefaults(defineProps<Props>(), {
  errorText: '',
})
</script>
<template>
  <div>
    <p v-if="props.errorText" class="text-red-600 flex justify-end text-sm mt-1">
      {{ props.errorText }}
    </p>
  </div>
</template>
