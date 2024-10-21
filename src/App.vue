<template>
  <body>
    <Home/>
    <footer>
      <p>Desarrollado por Gerardo Maldonado Félix</p><p>Full Stack Developer.</p>
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
@import './assets/variables.css';

body {
  font-family: 'Roboto', sans-serif;
}

footer{ 
  height: 10vh;
  width: 100vw;
  background-color: black;
  color:aliceblue;
  text-align: center;
  bottom: 0;
  padding-top: 40px;  
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
