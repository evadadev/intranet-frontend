<template>
  <div class="container">
    <div class="items">
      <img src="../../public/img-oficina.png" alt="imagen-login" />
    </div>
    <div class="items form-login">
        <div class="text">
            <h2>Bienvenidos</h2>
            <p>Introduce tu usuario y clave de acceso</p>
        </div>
      <!-- <form @submit.prevent="handleLogin">
            <InputField v-model="email" placeholder="Email" />
            <InputField v-model="password" type="password" placeholder="Password" />
            <button :disabled="loading">Login</button>
            <p v-if="error" class="error">{{ error }}</p>
        </form> -->
      <form>
        <div class="input">
          <label for="email">Correo Electrónico</label>
          <input type="email" placeholder="MiCorreo@gamil.com" />
          <label for="password">Contraseña</label>
          <input type="password" placeholder="Escriba su Contraseña" />
        </div>
        <div class="btn">
            <a href="">¿Has olvidado la contraseña?</a>
            <button type="submit">Inciar Sección</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import { useRouter } from 'vue-router';
// import { useAuth } from '../composables/useAuth';

// const email = ref('');
// const password = ref('');
// const router = useRouter;
// const { login, error, loading } = useAuth();

// const handleLogin = async () => {
//     try {
//         await login(email.value, password.value);
//         router.push('/dashboard');
//     } catch (err) {
//         console.log('contraseña erronea:', err)
//     }
// }
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
}
h2 {
    text-align: start;
    font-family: cursive;
    margin-bottom: unset;
}
p {
    margin-top: unset;
    font-size: small;
    color: gray;
}
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10%;

}

.items {
  width: 100vw;
  height: 100hw;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* text-align: center; */
  /* justify-content: flex-start; */
}

img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
}

.input {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
}

label {
  font-size: 14px;
  font-weight: bold;
}

.btn {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 10px;
}
button {
  width: 310px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #2b7fff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

a {
    font-size: small;
    color: #2b7fff;
    text-decoration: none;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
