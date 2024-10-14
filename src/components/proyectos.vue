<template>
  <div class=pantalla>
    <div class="contenedorElementos">
      <div class=etiqueta>
        <h1 class="titulo"><span class="simbolo">&lt;</span>Proyectos<span class="simbolo">/&gt;</span></h1>
      </div>
      <div class=contenedorOscuro>
        <div class=proyectos>

          <Card v-if="vista"
            v-for="(item, index) in prueba"
            :key="index"
            :titulo="item.titulo"
            :tecnologia="item.tecnologia"
            :detalles="item.detalles"
            :imagen="item.imagen"
            :imagenGif="item.gif"
          ></Card>

          <swiper v-if="!vista"
            :slides-per-view="1"
            :space-between="50"
            pagination
            navigation
            loop
          >
            <swiper-slide v-for="(item, index) in prueba" :key="index">
              <Card
                :titulo="item.titulo"
                :tecnologia="item.tecnologia"
                :detalles="item.detalles"
                :imagen="item.imagen"
                :imagenGif="item.gif"
              />
            </swiper-slide>
          </swiper>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Card from "./card.vue"
import { ref, onMounted, onBeforeUnmount} from "vue";
import corajeJpeg from '../assets/coraje.jpeg'
import corajeGif from '../assets/coraje.gif'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import  'swiper/modules';

const vista = ref(window.visualViewport.width > 600)

const prueba = ref([
  {
  titulo: "CECODIC",
  tecnologia: ["/habilidades/vue.png", "/habilidades/mysql.png", "/habilidades/node.png", "/habilidades/express.png"],
  detalles: "Detalles de CECODIC",
  imagen: corajeJpeg,
  gif: corajeGif
  },
  {
  titulo: "Blog",
  tecnologia: ["/habilidades/vue.png"],
  detalles: "Detalles del blog",
  imagen: corajeJpeg,
  gif: corajeGif
  },
  {
  titulo: "Calculadora IMC",
  tecnologia:["/habilidades/dotnet.svg", "/habilidades/sqlite.svg"],
  detalles: "detalles de la calculadora",
  imagen: corajeJpeg,
  gif: corajeGif
  },
  {
  titulo: "Fiscalia",
  tecnologia: ["/habilidades/csharp.png", "/habilidades/dotnet.svg", "/habilidades/sqlserver.png"],
  detalles: "Detalles de lo de fiscalia",
  imagen: corajeJpeg,
  gif: corajeGif
  }
])


const actualizacionAncho = () => {
  vista.value = window.visualViewport.width > 600;
};


onMounted(() => {
  window.addEventListener("resize", actualizacionAncho);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", actualizacionAncho);
});

</script>

<style scope>
.proyectos {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .proyectos{
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
