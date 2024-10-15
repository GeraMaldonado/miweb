<template>
  <div class="contenedorCard">
    <div class="proyectoCard" @mousemove="posicionDetalles" :style="{ backgroundImage: `url(${fondoActual})` }"
      @mouseover="fondoActual = imagenGif" @mouseleave="fondoActual = imagen">
      <div class="tituloProyecto">{{ titulo }}</div>
      <div class="tecnologiaProyecto"><img v-for="(icon, index) in tecnologia" :key="index" :src="icon"
          alt="Icono de tecnología" class="iconoTecnologia" /></div>
    </div>
    <div class="detalles" :style="{ top: ejeY, left: ejeX }">
      <div class="detallesTitulo">{{ titulo }}</div>
      <div class="detallesTecnologias"><img v-for="(icon, index) in tecnologia" :key="index" :src="icon"
          alt="Icono de tecnología" class="iconoTecnologia" /> </div>
      <div class="detallesDescripcion">{{ detalles }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  titulo: String,
  tecnologia: Array,
  detalles: String,
  imagen: String,
  imagenGif: String
})

const ejeY = ref("")
const ejeX = ref("")
const fondoActual = ref(props.imagen)
const pantallaX = window.visualViewport.width
const pantallaY = window.visualViewport.height

const posicionDetalles = (event) => {
  if (window.visualViewport.width > 600) {
    ejeX.value = (event.clientX + 250) > pantallaX ? `${event.clientX - 250}px` : `${event.clientX + 20}px`
    ejeY.value = (event.clientY + 350) > pantallaY ? `${event.clientY - 350}px` : `${event.clientY + 20}px`
  }
}

</script>

<style scoped>
.proyectoCard {
  height: 200px;
  width: 180px;
  border-radius: 20% 5%;
  background-color: #d7d7d7;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 1s;
  overflow: hidden;
}

.tituloProyecto,
.tecnologiaProyecto {
  background-color: #373678c1;
  height: 100%;
  width: 100%;
  text-align: center;
}

.tituloProyecto {
  align-content: end;
}

.proyectoCard div {
  transition: transform 1s ease;
}

.proyectoCard:hover .tituloProyecto {
  transform: translateY(-100%);
}

.proyectoCard:hover .tecnologiaProyecto {
  transform: translateY(100%);
}

.detallesTitulo, .tituloProyecto {
    color: #d7d7d7;
    font-size: 25px;
    font-weight: 700;
  }

.detalles {
  background-color: #373678f5;
  border-radius: 25% 5%;
  position: fixed;
  display: none;
  width: 200px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  z-index: 10;
  pointer-events: none;

  .detallesTecnologias {
    display: flex;
    width: 100%;
    gap: 10px;
    flex-wrap: wrap;
    .iconoTecnologia {
      margin: auto;
    }
  }

  .detallesDescripcion {
    background-color: #d7d7d7;
    width: 100%;
    height: auto;
    padding: 5px;
  }
}

.iconoTecnologia {
  width: 20%;
  margin: 5px 5px;
  border-radius: 10%;
  padding: 5px;
  background-color: #d7d7d7;
  text-align: justify;
}

.iconoInformacion {
  display: none;
}

@media only screen and (min-width: 600px) {
  .contenedorCard:hover {
    .detalles {
      display: flex;
    }
  }
}
@media (max-height: 760px){
  .contenedorCard{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .detalles {
    position: sticky;
    display: flex;
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 35%;
    height: auto;
    max-height: 150px;
    overflow: scroll;
    scrollbar-width: none;
    .detallesTitulo, .detallesTecnologias{
      display: none;
    }
  }
}
@media (max-width: 600px){
  .contenedorCard{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .detalles {
    position: sticky;
    display: flex;
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 80%;
    height: auto;
    max-height: 120px;
    overflow: scroll;
    scrollbar-width: none;
    .detallesTitulo, .detallesTecnologias{
      display: none;
    }
  }
}
</style>
