<template>
  <div class="setup">
    <Laboratorio v-show="laboratorio" />
    <Usuario v-show="usuario" />
    <Clinica v-show="clinica" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Laboratorio from "@/components/Laboratorio.vue";
import Usuario from "@/components/Usuario.vue";
import Clinica from "@/components/Clinica.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Setup",
  props: {
    laboratorio: Boolean,
    usuario: Boolean,
    clinica: Boolean,
  },
  components: {
    Laboratorio,
    Usuario,
    Clinica,
    Footer,
  },
};
</script>
