<template>
  <div class="pantalla">
    <div class="contenedorElementos">
      <div class="etiqueta">
        <h1 class="titulo"><span class="simbolo">&lt;</span>Habilidades<span class="simbolo">/&gt;</span></h1>
      </div>
      <div class="contenedorP">
        <img class="imagenHabilidad" src="../assets/1_tRlkqQL5xfgwHTFODp8LHw.webp" style="width: 40%;">
        <div class="contenedorOscuro">
          <div class="habilidades">
            <div class="contenedorLogo" title="Express JS" ><img class="logo" src="../assets/habilidades/express.png" alt="Logo del framework Express JS"></div>
            <div class="contenedorLogo" title="MySQL"><img class="logo" src="../assets/habilidades/mysql.png" alt="Logo de la base de datos MySQL"></div>
            <div class="contenedorLogo" title="Neovim"><img class="logo" src="../assets/habilidades/neovim.png" alt="Logo del editor de texto en terminal NeoVim"></div>
            <div class="contenedorLogo" title="Node"><img class="logo" src="../assets/habilidades/node.png" alt="Logo del motor de ejecucion Node JS"></div>
            <div class="contenedorLogo" title="GNU/Linux Ubuntu"><img class="logo" src="../assets/habilidades/ubuntu.png" alt="Logo del sistema operativo de GNU/Linux Ubuntu"></div>
            <div class="contenedorLogo" title="VUE 3"><img class="logo" src="../assets/habilidades/vue.png" alt="Logo del framework Vue3 JS"></div>
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