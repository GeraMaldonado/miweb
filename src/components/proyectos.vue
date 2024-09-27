<template>
  <div class=pantalla>
    <div class="contenedorElementos">
      <div class=etiqueta>
        <h1 class=titulo>Proyectos</h1>
      </div>
      <div class=contenedorOscuro>
        <div class=proyectos>
          <Card
            v-for="(item, index) in prueba"
            :key="index"
            :nombre="item.titulo"
            :tecnologia="item.tecnologia"
            :detalles="item.detalles"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "./card.vue"
import { ref } from "vue";

const prueba = ref([
  {
  titulo: "CECODIC",
  tecnologia: "VUE + EXPRESS",
  detalles: "Detalles de CECODIC"
  },
  {
  titulo: "Blog",
  tecnologia: "VUE",
  detalles: "Detalles del blog"
  },
  {
  titulo: "Calculadora IMC",
  tecnologia: "VUE + EXPRESS",
  detalles: "detalles de la calculadora"
  },
  {
  titulo: "Fiscalia",
  tecnologia: "C# + SQL SERVER + .NET",
  detalles: "Detalles de lo de fiscalia"
  }
])
</script>

<style scope>


</style>