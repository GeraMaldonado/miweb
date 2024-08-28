<template>
  <div class=pantalla>
    <div class=contenedorPantalla>
      <div class=etiqueta>
        <h1 class=titulo>Contacto</h1>
      </div>
      <div class=contacto>
        <form>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
          <input type="email" id="email" name="email" placeholder="Correo" required />
          <textarea id="mensaje" name="menaje" placeholder="Mensaje" required />
          <button type=button>Enviar</button>
        </form>
        <img class=logo src='../assets/contacto/github.png'>
        <img class=logo src='../assets/contacto/linkedin.png'>
        <img class=logo src='../assets/contacto/whatsapp.png'>
      </div>
    </div>
  </div>
</template>
