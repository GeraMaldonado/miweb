<template>
  <div class="pantalla">
    <div class="contenedorElementos">
      <div class="etiqueta">
        <h1 class="titulo"><span class="simbolo">&lt;</span>Proyectos<span class="simbolo">/&gt;</span></h1>
      </div>
      <div class="contenedorOscuro">
        <div class="proyectos">
          <Card v-if="vistaAncho"
            v-for="(item, index) in prueba"
            :key="index"
            :titulo="item.titulo"
            :tecnologia="item.tecnologia"
            :detalles="item.detalles"
            :imagen="item.imagen"
            :imagenGif="item.gif"
            :link="item.link"
          ></Card>

          <swiper
            v-if="!vistaAncho"
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :space-between="50"
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
                :link="item.link"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './card.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import proyectos from '../proyectos.json'

const vistaAncho = ref(window.visualViewport.width > 800);

const prueba = proyectos;

const actualizacionAncho = () => {
  vistaAncho.value = window.visualViewport.width > 800;
};

onMounted(() => {
  window.addEventListener('resize', actualizacionAncho);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', actualizacionAncho);
});
</script>

<style scoped>
.proyectos {
  width: 100%;
  padding: 10px;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  font-size: 20px;
  z-index: 10;
}

@media only screen and (min-width: 800px) {
  .proyectos {
    padding: 30px;
    width: 100%;
    height: 85%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    scrollbar-width:none;
  }
}

@media (max-width: 800px){
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
