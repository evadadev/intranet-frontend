<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { ref } from 'vue'

import { getProfile, putProfile } from '@/services/profile'
import { useAuthStore } from '@/stores/auth'

import BtnBase from '@/components/ui/BtnBase.vue'
import CardBase from '@/components/ui/CardBase.vue'
import LayoutApp from '@/components/ui/LayoutApp.vue'
import TitleForm from '@/components/ui/TitleForm.vue'
import TextInput from '@/components/ui/TextInput.vue'
import SelecForm from '@/components/ui/SelecForm.vue'

const auhtStore = useAuthStore()

const user = ref({
  user_id: auhtStore.user.id,
  surname: '',
  dni: '',
  identification: '',
  nationality: '',
  maritalStatus: '',
  gender: '',
  birthDate: '',
  phone: '',
  residence: '',
  zipCode: '',
  province: '',
  locality: '',
  country: '',
  user: { ...auhtStore.user },
})

onMounted(async () => {
  try {
    user.value = await getProfile(auhtStore.user.id)
  } catch (error) {
    console.log('Error al obtener el perfil:', error)
  }
})

const router = useRouter()

const btnVolverInicio = () => {
  router.push('/')
}

const handleUpdate = async () => {
  await putProfile(user.value, auhtStore.user.id)
}
</script>

<template>
  <LayoutApp>
    <CardBase>
      <TitleForm titleText="Mi perfil" />
      <div class="flex w-full items-center justify-items-start">
        <div class="w-1/2 h-screen flex flex-col px-5">
          <h2 class="font-semibold">Información personal</h2>
          <TextInput v-model="user.user.name" type="text" labelName="Nombre*" />
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
          <h2 class="font-semibold">Domicilio</h2>
          <TextInput v-model="user.residence" type="text" labelName="Residencia*" />
          <TextInput v-model="user.zipCode" type="text" labelName="Código postal*" />
          <TextInput v-model="user.province" type="text" labelName="Provincia*" />
          <TextInput v-model="user.locality" type="text" labelName="Localidad*" />
          <TextInput v-model="user.country" type="text" labelName="País*" />
          <BtnBase class="w-[110px] h-8" textBtn="Guardar" @click="handleUpdate" />
        </div>
      </div>
      <BtnBase
        textBtn="Incio"
        class="absolute bottom-1 left-2 w-[110px] h-8"
        @click="btnVolverInicio"
      />
    </CardBase>
  </LayoutApp>
</template>
