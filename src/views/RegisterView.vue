<script setup>
import BtnBase from '../components/ui/BtnBase.vue'
import TextInput from '../components/ui/TextIput.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ImputErrorField from '@/components/ImputErrorField.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const confirmEmail = ref('')
const router = useRouter()
const authStore = useAuthStore()
const errors = ref({
  general: '',
  email: '',
  password: '',
})

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/login')
  }
})

const handleRegister = async () => {
  errors.value = {
    general: '',
    email: '',
    password: '',
  }
  if (
    !name.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value ||
    !confirmEmail.value
  ) {
    errors.value.general = 'Por favor, rellena todos los campos'
    return
  }

  if (email.value !== confirmEmail.value) {
    errors.value.email = 'Los correos no coinciden'
    return
  }

  if (password.value !== confirmPassword.value) {
    errors.value.password = 'Las contraseñas no coinciden'
    return
  }

  try {
    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    authStore.setAuth(data.token, data.user)

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
          <ImputErrorField v-if="errors.email" :labelName="errors.email" :disabled="true" />
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
          <ImputErrorField v-if="errors.password" :labelName="errors.password" :disabled="true" />
          <div>
            <BtnBase textBtn="Registrarse" class="w-[310px] h-8 mt-4" @click="handleRegister" />
            <ImputErrorField v-if="errors.general" :labelName="errors.general" :disabled="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
