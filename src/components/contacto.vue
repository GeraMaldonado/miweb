<template>
    <div class="pantalla">
    <div class="contenedorElementos">
      <div class="etiqueta">
        <h1 class="titulo"><span class="simbolo">&lt;</span>Contacto<span class="simbolo">/&gt;</span></h1>
      </div>
      <div class="contenedorOscuro">
        <div class="contacto">
          <form @submit.prevent="sendEmail">
            <table>
              <tbody class="contenidoContacto">
                <tr class=apartadoContacto>
                  <td><input type="text" v-model="form.nombre" id="nombre" name="nombre" placeholder="Nombre" required /></td>
                </tr>
                <tr class=apartadoContacto>
                  <td><input type="email" v-model="form.email" id="email" name="email" placeholder="Correo" required /></td>
                </tr>
                <tr class="apartadoContacto apartadoMensaje" >
                  <td><textarea v-model="form.mensaje" id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea></td>
                </tr>
                <tr class=apartadoContacto>
                  <td>
                    <button type="submit">Enviar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div class="logosContactos">
            <a href="https://github.com/GeraMaldonado"><img class="logoContacto" src="../assets/contacto/github.png" /></a>
            <a href="https://www.linkedin.com/in/gerardo-maldonado-félix/"><img class="logoContacto" src="../assets/contacto/linkedin.png" /></a>
            <a href="https://wa.me/+524921244858"><img class="logoContacto" src="../assets/contacto/whatsapp.png" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from 'emailjs-com';
import { reactive } from 'vue';


const form = reactive({
  nombre: '',
  email: '',
  mensaje: ''
});


emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


const sendEmail = () => {
  const templateParams = {
    subject: 'Mensaje de Portfolio',
    name: form.nombre,
    from_name: form.email,
    message: form.mensaje
  };

  emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Correo enviado con éxito.');

      form.nombre = '';
      form.email = '';
      form.mensaje = '';

    })
    .catch(error => {
      console.log('FAILED...', error);
      alert('Hubo un problema al enviar el correo.');
    });
};
</script>


<style>
.logoContacto {
  width: 50px;
}
.contacto {
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contenidoContacto{
  height: 100%;
  display: flex;

  flex-direction: column;
}
.apartadoContacto{
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  input, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    min-width: 200px;
    width: 100%;
    border-radius: 5%;
    height: 30px;
    resize: none;
    border: none;
    padding: 10px;
    font-weight: 500;
  }
}
.logosContactos{
  height: 20%;
}
.apartadoMensaje{
  height: 150px;
  textarea{
    height: 150px;
  }
}
</style>  
