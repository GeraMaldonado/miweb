<template>
  <div class="fondo">
    <div class="espacio">
      <div class="estrellas1" :style="{ boxShadow: boxShadowValue1 }"></div>
      <div class="estrellas2" :style="{ boxShadow: boxShadowValue2 }"></div>
      <div class="estrellas1Mov" :style="{ boxShadow: boxShadowValue1Mov }"></div>
      <div class="estrellas2Mov" :style="{ boxShadow: boxShadowValue2Mov }"></div>
    </div>
  </div>
  <div class="contenedorComponentes">
    <Navegacion />
    <section id="inicio">
      <Home />
    </section>
    <section id="habilidades">
      <Habilidades />
    </section>
    <section id="proyectos">
      <Proyectos />
    </section>
    <section id="contacto">
      <Contacto />
    </section>
  </div>
</template>

<script setup>
import Navegacion from '../components/navegacion.vue';
import Home from '../components/home.vue';
import Habilidades from '../components/habilidades.vue';
import Proyectos from '../components/proyectos.vue';
import Contacto from '../components/contacto.vue';
import { ref, onMounted } from 'vue';

const boxShadowValue1 = ref('');
const boxShadowValue2 = ref('');
const boxShadowValue1Mov = ref('');
const boxShadowValue2Mov = ref('');

function generadorEstrellas(cantidadEstrellas) {
  let conjuntoEstrellas = '';
  for (let i = 0; i < cantidadEstrellas; i++) {
    let ejeX = (Math.random() * 100) - 50;
    let ejeY = (Math.random() * 100) - 50;
    let brillo = Math.random() * 4;
    let escala = Math.random();
    conjuntoEstrellas += `${ejeX}vw ${ejeY}vh ${brillo}px ${escala}px #fff, `;
  }
  return conjuntoEstrellas.slice(0, -2);
}

onMounted(() => {
  boxShadowValue1.value = generadorEstrellas(200);
  boxShadowValue2.value = generadorEstrellas(200);
  boxShadowValue1Mov.value = generadorEstrellas(100);
  boxShadowValue2Mov.value = generadorEstrellas(100);
});
</script>

<style scope>
.fondo{
  position: absolute;
  z-index: -2;
  height: 400vh;
  width: 100vw;
}

.espacio {
  background: linear-gradient(black 200vh,blue 70%, skyblue);
  height: 400vh;
  width: 100%;
}

.estrellas1, .estrellas2, .estrellas1Mov, .estrellas2Mov {
  position: absolute;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
}

.estrellas1{
  top: 10%;
}
.estrellas2{
  top: 35%;
}
.estrellas1Mov {
  top: 10%;
}
.estrellas2Mov {
  top: 45%;
}

.estrellas1Mov, .estrellas2Mov{
  animation: zoom-fade 20s infinite;
}

@keyframes zoom-fade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  98% {
    transform: scale(1.5);
    opacity: 0;
  }
  99% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
