<template>
  <nav class="navegador">
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#habilidades">Habilidades</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navegador {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: purple;
  display: flex;
  align-items: center;
}

.navegador ul {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 100%;
  align-items: center;
}

.navegador li {
  margin: 0px 20px;
}

a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
}

a:hover {
  background-color: black;
}
</style>
