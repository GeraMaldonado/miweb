<template>
  <div class=pantalla>
    <div class=contenedorElementos>
      <div class=etiqueta>
          <h1 class=titulo>Contacto</h1>
        </div>
      <div class=contenedorOscuro>
        <div class=contacto>
          <form>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
            <input type="email" id="email" name="email" placeholder="Correo" required />
            <textarea id="mensaje" name="menaje" placeholder="Mensaje" required />
            <button type=button>Enviar</button>
          </form>
          <img class=logoContacto src='../assets/contacto/github.png'>
          <img class=logoContacto src='../assets/contacto/linkedin.png'>
          <img class=logoContacto src='../assets/contacto/whatsapp.png'>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.logoContacto{
  width: 5%;
}
</style>