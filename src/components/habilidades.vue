<template>
  <div class="pantalla">
    <div class="contenedorElementos">
      <div class="etiqueta">
        <h1 class="titulo">Habilidades</h1>
      </div>
      <div class="contenedorP">
        <img class="imagenHabilidad" src="../assets/1_tRlkqQL5xfgwHTFODp8LHw.webp" style="width: 40%;">
        <div class="contenedorOscuro">
          <div class="habilidades">
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/express.png" title="Express JS" alt="Logo del framework Express JS"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/mysql.png" title="MySQL" alt="Logo de la base de datos MySQL"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/neovim.png"title="NeoVIM" alt="Logo del editor de texto en terminal NeoVim"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/node.png" title="Node" alt="Logo del motor de ejecucion Node JS"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/ubuntu.png" title="GNU/Linux Ubuntu" alt="Logo del sistema operativo de GNU/Linux Ubuntu"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/vue.png" title="VUE3" alt="Logo del framework Vue3 JS"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.contenedorLogo{
  will-change: filter;
  transition: filter 300ms;
}
.contenedorLogo:hover{
  filter: drop-shadow(0 0 2em #8280f0de)
}

</style>