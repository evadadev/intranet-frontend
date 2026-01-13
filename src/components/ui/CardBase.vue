<script setup>
defineProps({
  tituloCard: {
    type: String,
    default: '',
  },
  nameUser: {
    type: String,
    default: 'Usuario',
  },
  avatar: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="border border-[#ddd] rounded-2xl p-4 px-2 bg-gray-50">
    <h1 class="font-bold">{{ tituloCard }}</h1>
    <div v-if="avatar">
      <img src="" alt="" class="border-2 border-gray-300 w-9 h-9 rounded-full" />
    </div>
  </div>
</template>
