<script setup lang="ts">
interface Props {
  tituloCard?: string
  nameUser?: string
  avatar?: boolean
  icon?: string
}
const props = withDefaults(defineProps<Props>(), {
  tituloCard: '',
  nameUser: '',
  avatar: false,
  icon: '',
})
</script>

<template>
  <div class="border border-[#ddd] rounded-2xl p-4 px-2 bg-gray-50">
    <slot />
    <h1 class="font-bold">{{ props.tituloCard }}</h1>
    <h2 v-if="props.nameUser" class="text-sm">{{ props.nameUser }}</h2>
    <img v-if="props.avatar" src="" alt="" class="border-2 border-gray-300 w-9 h-9 rounded-full" />
    <font-awesome-icon v-if="props.icon" :icon="props.icon" />
  </div>
</template>
