<template>
  <div class=pantalla>
    <div class=contenedorElementos>
      <div class=contenedorOscuro>
        <div class=contenedorContenido>
          <h3 class=nombre>Gerardo Maldonado Félix</h3>
          <p class=descripcion>Soy un estudiante de <span class=destacador>programación web</span> con enfoque en el desarrollo <span class=destacador>backend</span>. Actualmente estoy adquiriendo habilidades técnicas sólidas y buscando oportunidades para aplicar mis conocimientos en entornos profesionales. Mi objetivo es crecer como profesional en el campo de la programación.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.contenedorContenido{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
}
.descripcion{
    margin-top: 10px;
    color: var(--color-texto); 
    line-height: 1.5;
    font-weight: 500;
    text-align: center;
    font-size: var(--altura-texto);
  }
  .nombre{
    margin-top: 2vmax;
    color: var(--color-texto); 
    line-height: 1.3;
    font-weight: 900;
    text-align: center;
    font-size: var(--altura-nombre);
  }

</style>