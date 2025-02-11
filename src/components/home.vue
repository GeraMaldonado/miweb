<template>
  <div class=pantalla>
    <div class=contenedorElementos>
      <div class=contenedorOscuro>
        <div class=contenedorContenido>
          <h3 class=nombre>Gera Maldonado</h3>
          <p class=descripcion>Programador web FullStack</p>
          <p class=descripcion><span :class="claseDestacador">{{ textoMostrado }}</span><span class="cursor">|</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.cursor{
  font-weight: bold;
  animation: parpadeo 0.8s infinite;
}

@keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const habilidades = [
  { texto: "Backend", clase: "destacador1" },
  { texto: "Frontend", clase: "destacador2" },
  { texto: "Bases de datos", clase: "destacador3" },
  { texto: "Despliegue", clase: "destacador4" }];

const textoMostrado = ref('');
const claseDestacador = ref('');
const indexHabilidad = ref(0);
const indexLetra = ref(0);
const escribiendo = ref(true);
let intervalo;

const empezarAnimacion = () => {
  intervalo = setInterval(animacionEscribir, 120);
};

const animacionEscribir = () => {
  const habilidadActual = habilidades[indexHabilidad.value].texto;
  claseDestacador.value = habilidades[indexHabilidad.value].clase;

  if (escribiendo.value) {
    if (indexLetra.value < habilidadActual.length) {
      textoMostrado.value += habilidadActual[indexLetra.value];
      indexLetra.value++;
    } else {
      setTimeout(() => {
        escribiendo.value = false;
      }, 500);
    }
  } else {
    if (indexLetra.value > 0) {
      textoMostrado.value = textoMostrado.value.slice(0, -1);
      indexLetra.value--;
    } else {
      indexHabilidad.value = (indexHabilidad.value + 1) % 4;
      escribiendo.value = true;
    }
  }
};

onMounted(() => {
  empezarAnimacion();
});

onBeforeUnmount(() => {
  clearInterval(intervalo);
});
</script>
