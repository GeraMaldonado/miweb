  <template>
    <div class="contenedorComponentes">
      <Fondo />
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
import Fondo from '@/components/fondo.vue';
</script>
