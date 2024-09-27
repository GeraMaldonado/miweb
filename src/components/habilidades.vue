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
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/express.png"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/mysql.png"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/neovim.png"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/node.png"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/ubuntu.png"></div>
            <div class="contenedorLogo"><img class="logo" src="../assets/habilidades/vue.png"></div>
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