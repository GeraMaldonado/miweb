<template>
  <nav class="navegador">
    <button class="menu" @click="toggleMenu">Menú</button>
    <ul v-show="menuVisible || !isMobile" class="navegadorElementos" id="navegador">
      <li><a href="#inicio" :style="{ color: colorValue1 }">Inicio</a></li>
      <li><a href="#habilidades" :style="{ color: colorValue2 }">Habilidades</a></li>
      <li><a href="#proyectos" :style="{ color: colorValue3 }">Proyectos</a></li>
      <li><a href="#contacto" :style="{ color: colorValue4 }">Contacto</a></li>
    </ul>
    <a class="curriculum" v-show="menuVisible || !isMobile" href="../assets/curriculum.pdf">CURRICULUM</a>
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuVisible = ref(false); 
const isMobile = ref(false);

const toggleMenu = () => {
  if (isMobile.value) {
    menuVisible.value = !menuVisible.value;
  }
};

const handleClickOutside = (event) => {
  const menu = document.getElementById('navegador');
  if (menu && !menu.contains(event.target) && !event.target.classList.contains('menu') && isMobile.value) {
    menuVisible.value = false;
  }
};

const updateMenuVisibility = () => {
  isMobile.value = window.visualViewport.width < 600;
  if (!isMobile.value) {
    menuVisible.value = true; 
  } else {
    menuVisible.value = false; 
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updateMenuVisibility);
  
  updateMenuVisibility(); 

  const pantalla = window.visualViewport.height;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY < pantalla - pantalla / 3) {
      colorValue1.value = '#8280f0';
      colorValue2.value = 'white';
      colorValue3.value = 'white';
      colorValue4.value = 'white';
    } else if (scrollY >= pantalla - pantalla / 3 && scrollY < pantalla * 2 - pantalla / 3) {
      colorValue1.value = 'white';
      colorValue2.value = '#8280f0';
      colorValue3.value = 'white';
      colorValue4.value = 'white';
    } else if (scrollY >= pantalla * 2 - pantalla / 3 && scrollY < pantalla * 3 - pantalla / 3) {
      colorValue1.value = 'white';
      colorValue2.value = 'white';
      colorValue3.value = '#8280f0';
      colorValue4.value = 'white';
    } else {
      colorValue1.value = 'white';
      colorValue2.value = 'white';
      colorValue3.value = 'white';
      colorValue4.value = '#8280f0';
    }
  });
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateMenuVisibility);
});

const colorValue1 = ref('#8280f0');
const colorValue2 = ref('white');
const colorValue3 = ref('white');
const colorValue4 = ref('white');
</script>
<style scoped>    
.navegador {
  height: 40px; 
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #0a0a0a;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navegador ul {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
}

.navegador li {
  margin: 0px 20px;
}

a {
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: large;
  font-weight: 900;
}


.curriculum {
  background-color: #8280f0;
  color: white;
  border-radius: 10px;
  padding: 1px 8px;
  margin-left: auto;
  margin-right: 1%;
  font-size: medium;
}

.menu {
  display: none;
}

@media only screen and (max-width: 600px) {
  .navegador {
    height: auto; 
    display: block;
  }

  .navegador ul {
    display: block;
  }

  .navegadorElementos li {
    margin: 10px 10px;
  }

  .menu {
    display: block;
    background-color: #333;
    color: white;
    padding: 10px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
