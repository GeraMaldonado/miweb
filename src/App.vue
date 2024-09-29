<template>
  <body>
    <Home/>
    <footer>
      <p>&copy Gerardo Maldonado. Derechos resesrvados</p>
    </footer>
  </body>
</template>

<script setup>
import Home from './views/Home.vue'
import '@fontsource/roboto';

</script>
<style>
@import './assets/styles.css';
@import './assets/reset.css';

body {
  font-family: 'Roboto', sans-serif;
}

footer{ 
  height: 10vh;
  width: 100vw;
  background-color: black;
  color: red;
  text-align: left;
  bottom: 0;  
}

h1, h2, h3, h4 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

header, footer, body {
  min-width: 370px;
}

</style>
