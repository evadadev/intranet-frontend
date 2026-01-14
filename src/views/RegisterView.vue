<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { setRegister } from '@/services/auth.js'

import BtnBase from '../components/ui/BtnBase.vue'
import TextInput from '../components/ui/TextIput.vue'
import InputErrorField from '../components/ui/InputErrorField.vue'

const dataForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  confirmEmail: '',
})
const router = useRouter()

const errors = ref({
  general: '',
  email: '',
  password: '',
})

const handleRegister = async () => {
  errors.value = {
    general: '',
    email: '',
    password: '',
  }
  if (
    !dataForm.value.name ||
    !dataForm.value.email ||
    !dataForm.value.password ||
    !dataForm.value.confirmPassword ||
    !dataForm.value.confirmEmail
  ) {
    errors.value.general = 'Por favor, rellena todos los campos'
    return
  }

  if (dataForm.value.email !== dataForm.value.confirmEmail) {
    errors.value.email = 'Los correos no coinciden'
    return
  }

  if (dataForm.value.password !== dataForm.value.confirmPassword) {
    errors.value.password = 'Las contraseñas no coinciden'
    return
  }

  try {
    await setRegister({
      name: dataForm.value.name,
      email: dataForm.value.email,
      password: dataForm.value.password,
    })

    router.push('/login')
  } catch (error) {
    console.log('Error en la solicitud de registro:', error)
  }
}
</script>

<template>
  <div class="flex flex-row items-center justify-items-start">
    <div class="md:flex w-1/2 h-screen hidden">
      <img src="../../public/img-oficina.png" alt="imagen-login" class="opacity-50" />
    </div>
    <div class="md:w-1/2 w-full h-screen flex flex-col items-center justify-center px-5">
      <div class="flex flex-col max-w-[310px]">
        <div class="pb-3">
          <h2 class="text-3xl font-bold">Registro de usuario</h2>
          <p class="text-sm">Rellena los campos para registrarte</p>
        </div>
        <div>
          <TextInput v-model="name" labelName="nombre completo" placeholder="Mi Nombre" />
          <TextInput v-model="email" labelName="correo" placeholder="MiCorreo@gmail.com" />
          <TextInput
            v-model="confirmEmail"
            labelName="confirmar correo"
            placeholder="MiCorreo@gmail.com"
          />
          <InputErrorField v-if="errors.email" :errorText="errors.email" />
          <TextInput
            v-model="password"
            type="password"
            labelName="contraseña"
            placeholder="MiContraseña"
          />
          <TextInput
            v-model="confirmPassword"
            type="password"
            labelName="confirmar contraseña"
            placeholder="MiContraseña"
          ></TextInput>
          <InputErrorField v-if="errors.password" :errorText="errors.password" />
          <div>
            <BtnBase textBtn="Registrarse" class="w-[310px] h-8 mt-4" @click="handleRegister" />
            <InputErrorField v-if="errors.general" :errorText="errors.general" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
