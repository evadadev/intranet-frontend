<template>
  <section class="home">
    <h1>Bienvenido a la Intranet</h1>
    <p>Esta es la página de inicio.</p>

    <div class="card">
      <h2>Accesos rápidos</h2>
      <ul>
        <li><router-link to="/usuarios">Gestión de usuarios</router-link></li>
        <li><router-link to="/departamentos">Departamentos</router-link></li>
        <li><router-link to="/reportes">Reportes</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// Aquí puedes importar stores, composables o datos si lo necesitas
</script>

<style scoped>
.home {
  padding: 2rem;
}

.card {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card li {
  margin-bottom: 0.5rem;
}

.card a {
  color: #2b7fff;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}
</style>
