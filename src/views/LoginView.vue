<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'

import BtnBase from '../components/ui/BtnBase.vue'
import TextInput from '../components/ui/TextInput.vue'
import LayoutLogin from '@/components/ui/LayoutLogin.vue'
import TitleForm from '@/components/ui/TitleForm.vue'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    console.log('introduce el el email y la contraseña')
    return
  }

  try {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    const data = await response.json()
    authStore.setAuth(data.token, data.user)
    router.push('/')
  } catch (error) {
    console.log('Error en la solicitud de login:', error)
  }
}

function handleRegister() {
  router.push('/register')
}
</script>

<template>
  <LayoutLogin>
    <TitleForm
      titleText="Iniciar sesión"
      subtitleText="Introduce tus credenciales para acceder a tu cuenta"
    />
    <TextInput v-model="email" labelName="correo" placeholder="MiCorreo@gmail.com" />
    <TextInput
      v-model="password"
      type="password"
      labelName="contraseña"
      placeholder="MiContraseña"
    />
    <div>
      <a href="" class="flex justify-end text-xs text-sky-600 mb-2">¿Has olvidado la contraseña?</a>
      <BtnBase textBtn="Iniciar Sesión" class="w-[310px] h-8" @click="handleLogin" />
      <BtnBase textBtn="Registrarse" class="w-[310px] h-8" @click="handleRegister" />
    </div>
  </LayoutLogin>
</template>
