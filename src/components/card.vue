<template>
  <div class="proyectoCard"  
    @mousemove="posicionDetalles"
    :style="{ backgroundImage: `url(${fondoActual})` }"
    @mouseover="fondoActual = imagenGif"
    @mouseleave="fondoActual = imagen">
    <div class="tituloProyecto">{{ nombre }}</div>
    <div class="tecnologiaProyecto"><img v-for="(icon, index) in tecnologia" :key="index" :src="icon" alt="Icono de tecnología" class="iconoTecnologia"/></div>
    <div class="detalles" :style="{ top: ejeY, left: ejeX }">{{ detalles }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  nombre: String,
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
  ejeX.value = (event.clientX + 220) > pantallaX ? `${event.clientX - 220}px` : `${event.clientX + 20}px`
  ejeY.value = (event.clientY + 320) > pantallaY ? `${event.clientY - 320}px` : `${event.clientY + 20}px`
}
</script>

<style scoped>
.proyectoCard {
  height: 200px;
  width: 180px;
  border-radius: 10%;
  background-color: white;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  transition: all 1s;
  overflow: hidden;
}

.tituloProyecto,
.tecnologiaProyecto {
  background-color: rgba(128, 128, 128, 0.611);
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
  transform: translateY(-70%);
}

.proyectoCard:hover .tecnologiaProyecto {
  transform: translateY(70%);
}

.detalles {
  display: none;
  width: 200px;
  height: 300px;
}

.proyectoCard:hover .detalles {
  background-color: red;
  position: fixed;
  display: flex;
  z-index: 10;
}
.iconoTecnologia{
  background-color: aqua;
  width: 20%;
  margin: 5px 5px;
}
</style>
