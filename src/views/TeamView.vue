<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

import { getUsers } from '@/services/users'
import type { User } from '@/types/types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/fontawesome'

import BtnBase from '@/components/ui/BtnBase.vue'
import CardBase from '@/components/ui/CardBase.vue'
import LayoutApp from '@/components/ui/LayoutApp.vue'
import TitleForm from '@/components/ui/TitleForm.vue'

const router = useRouter()
const users = ref<User[]>([])

onMounted(async () => {
  try {
    users.value = await getUsers()
  } catch (error) {
    console.log('Error al obtener los usuarios:', error)
  }
})

const btnVolverInicio = () => {
  router.push('/')
}

const handleUpdate = (id: number) => {
  router.push(`/user/${id}`)
}
</script>

<template>
  <LayoutApp>
    <CardBase class="h-full">
      <div class="flex items-center gap-1">
        <font-awesome-icon icon="people-group" />
        <TitleForm titleText="Mi Equipo" />
      </div>

      <div class="flex flex-col text-center mt-5">
        <table class="">
          <tr>
            <th>Usuarios</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Modificar dato</th>
          </tr>
          <tr v-for="user in users" key="user.id" class="hover:bg-gray-200">
            <td
              class="border-t border-b border-gray-300 dark:border-gray-700 p-3"
              v-if="user.id"
              @click="handleUpdate(user.id)"
            >
              {{ user.name }}
            </td>
            <td
              class="border-t border-b border-gray-300 dark:border-gray-700 p-3"
              v-if="user.id"
              @click="handleUpdate(user.id)"
            >
              {{ user.email }}
            </td>
            <td
              class="border-t border-b border-gray-300 dark:border-gray-700 p-3"
              v-if="user.id"
              @click="handleUpdate(user.id)"
            >
              {{ user.phone }}
            </td>
            <td class="border-t border-b border-gray-300 dark:border-gray-700">
              <font-awesome-icon
                icon="pencil"
                class="w-18"
                v-if="user.id"
                @click="handleUpdate(user.id)"
              />
            </td>
          </tr>
        </table>
      </div>
      <BtnBase
        textBtn="Incio"
        class="absolute bottom-1 left-2 w-[110px] h-8"
        @click="btnVolverInicio"
      />
    </CardBase>
  </LayoutApp>
</template>
