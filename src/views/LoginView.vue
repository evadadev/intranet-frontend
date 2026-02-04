<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { login } from '@/services/auth.js'

import useVuelidate from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'

import BtnBase from '@/components/ui/BtnBase.vue'
import TextInput from '@/components/ui/TextInput.vue'
import LayoutLogin from '@/components/ui/LayoutLogin.vue'
import TitleForm from '@/components/ui/TitleForm.vue'

interface LoginForm {
  email: string
  password: string
}

const email = ref<LoginForm['email']>('')
const password = ref<LoginForm['password']>('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = async () => {
  if (v$.value.$invalid) {
    return
  }

  try {
    const body = {
      email: email.value,
      password: password.value,
    }
    const data = await login(body)

    authStore.setAuth(data.token, data.user)
    router.push('/')
  } catch (error) {
    console.log('Error en la solicitud de login:', error)
  }
}

function handleRegister() {
  router.push('/register')
}

const rules = {
  email: { required, emailValidator },
  password: { required },
}
const v$ = useVuelidate(rules, { email, password })
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
