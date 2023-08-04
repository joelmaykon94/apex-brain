<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="3 offset-md-2">
        <h1 class="heading-5 font-weight-medium mb-3 grey--text text--darken-1">
          Bem Vindo(a)!
        </h1>
        <h2 class="grey--text text--darken-1 font-weight-bold">leolands,</h2>
        <p class="subheading grey--text text--darken-1 font-weight-medium">
          Obrigado por ter escolhido a
          <b class="font-weight-bold">Hubvet</b> como sua plataforma veterinária
          preferida. ;) Agora que você já está cadastrado, poderá usufluir da
          plataforma de diversas formas. Armazenar
          <b class="font-weight-bold">informações do seu animal</b> em nuvem com
          total segurança, criar um
          <b class="font-weight-bold">Ambiente</b> para
          <b class="font-weight-bold">Laboratório Veterinário</b> ou
          <b class="font-weight-bold">Clínica Veterinária</b> clicando no botão
          de <b class="font-weight-bold">setup</b> logo abaixo.
        </p>
        <router-link to="/setup-laboratorio">
          <v-tooltip v-model="show" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img
                v-bind="attrs"
                v-on="on"
                :src="require('../assets/botao-iniciar.svg')"
                contain
                height="80"
              />
            </template>
            <span>Iniciar meu ambiente</span>
          </v-tooltip>
        </router-link>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="require('../assets/drawkit-server-woman.svg')"
          class="my-3"
          contain
          height="600"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BemVindo",
  data: () => ({
    show: false
  })
};
</script>
