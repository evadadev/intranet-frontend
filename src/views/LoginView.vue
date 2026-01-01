<script setup>
import BtnBase from '../components/ui/BtnBase.vue'
import TextInput from '../components/ui/TextIput.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (authStore.isAuthenticated) {
    router.push('/')
  }
})

const handleLogin = async () => {
  // clausula guardia
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

    // Guardar usuario opcionalmente
    authStore.setAuth(data.token, data.user)

    // Redirigir al panel de inicio
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
  <div class="flex flex-row items-center justify-items-start">
    <div class="md:flex w-1/2 h-screen hidden">
      <img src="../../public/img-oficina.png" alt="imagen-login" class="opacity-50" />
    </div>
    <div class="md:w-1/2 w-full h-screen flex flex-col items-center justify-center px-5">
      <div class="flex flex-col max-w-[310px]">
        <div class="pb-3">
          <h2 class="text-3xl font-bold">Bienvenidos</h2>
          <p class="text-sm">Introduce tu usuario y clave de acceso</p>
        </div>
        <div>
          <TextInput v-model="email" labelName="correo" placeholder="MiCorreo@gmail.com" />
          <TextInput
            v-model="password"
            type="password"
            labelName="contraseña"
            placeholder="MiContraseña"
          />
          <div>
            <a href="" class="flex justify-end text-xs text-sky-600 mb-2"
              >¿Has olvidado la contraseña?</a
            >
            <BtnBase textBtn="Iniciar Sesión" class="w-[310px] h-8" @click="handleLogin" />
            <BtnBase textBtn="Registrarse" class="w-[310px] h-8" @click="handleRegister" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
