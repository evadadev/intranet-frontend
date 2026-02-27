<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import type { User } from '@/types/types'
import { getUser, putUser } from '@/services/users'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/plugins/fontawesome'

import BtnBase from '@/components/ui/BtnBase.vue'
import CardBase from '@/components/ui/CardBase.vue'
import LayoutApp from '@/components/ui/LayoutApp.vue'
import TitleForm from '@/components/ui/TitleForm.vue'
import TextInput from '@/components/ui/TextInput.vue'
import SelecForm from '@/components/ui/SelecForm.vue'

const user = ref<User | null>(null)
const route = useRoute()

onMounted(async () => {
  try {
    const id = Number(route.params.id)
    user.value = await getUser(id)
  } catch (error) {
    console.log('Error al obtener el perfil:', error)
  }
})

const handleUpdate = async () => {
  if (!user.value) return
  try {
    const id = Number(route.params.id)
    if (!id) throw new Error('ID inválido')
    await putUser(user.value, id)

    console.log('Usuario actualizado correctamente')
  } catch (error) {
    console.error('Error al actualizar:', error)
  }
}
</script>

<template>
  <LayoutApp v-if="user">
    <CardBase>
      <div class="flex items-center gap-1">
        <font-awesome-icon icon="user" />
        <TitleForm :titleText="`${user.name} ${user.surname}`" />
      </div>
      <div class="flex w-full items-center justify-items-start">
        <div class="w-1/2 h-screen flex flex-col px-5">
          <h2 class="font-semibold">Modifar datos personales</h2>
          <TextInput v-model="user.name" type="text" labelName="Nombre*" />
          <TextInput v-model="user.surname" type="text" labelName="Apellidos*" />
          <SelecForm
            v-model="user.identification"
            labelText="Tipo de indentificación*"
            :options="[
              { valueOption: 'dni', textOption: 'DNI' },
              { valueOption: 'nie', textOption: 'NIE' },
              { valueOption: 'passport', textOption: 'Pasaporte' },
            ]"
          />
          <TextInput v-model="user.dni" type="text" labelName="DNI*" />
          <TextInput v-model="user.nationality" type="text" labelName="Nacionalidad*" />
          <SelecForm
            v-model="user.maritalStatus"
            labelText="Estado civil*"
            :options="[
              { valueOption: 'single', textOption: 'Soltero/a' },
              { valueOption: 'married', textOption: 'Casado/a' },
              { valueOption: 'divorced', textOption: 'Divorciado/a' },
              { valueOption: 'widower', textOption: 'Viudo/a' },
              { valueOption: 'other', textOption: 'Otros' },
            ]"
          />
          <SelecForm
            v-model="user.gender"
            labelText="Género*"
            :options="[
              { valueOption: 'male', textOption: 'Hombre' },
              { valueOption: 'female', textOption: 'Mujer' },
              { valueOption: 'other', textOption: 'Otros' },
            ]"
          />
          <TextInput v-model="user.birthDate" type="date" labelName="Fecha de nacimiento*" />
          <TextInput v-model="user.phone" type="text" labelName="Teléfono*" />
        </div>
        <div class="w-1/2 h-screen flex flex-col px-5">
          <TextInput v-model="user.residence" type="text" labelName="Residencia*" />
          <TextInput v-model="user.zipCode" type="text" labelName="Código postal*" />
          <TextInput v-model="user.province" type="text" labelName="Provincia*" />
          <TextInput v-model="user.locality" type="text" labelName="Localidad*" />
          <TextInput v-model="user.country" type="text" labelName="País*" />
          <BtnBase class="w-[110px] h-8" textBtn="Guardar" @click="handleUpdate" />
        </div>
      </div>
    </CardBase>
  </LayoutApp>
</template>
