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
  align-items: center; /* Alinea el contenido verticalmente en el centro */
}

.navegador ul {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  list-style-type: none; /* Elimina los puntos de la lista */
  height: 100%; /* Asegura que el ul llene toda la altura del nav */
  align-items: center; /* Alinea los elementos del ul verticalmente en el centro */
}

.navegador li {
  margin: 0px 20px;
}

a {
  color: white;
  text-decoration: none;
  display: flex; /* Añadir flex al anchor */
  align-items: center; /* Asegura que el texto dentro del anchor esté centrado verticalmente */
  height: 100%; /* Asegura que el anchor llene toda la altura del li */
}

a:hover {
  background-color: black;
}
</style>
