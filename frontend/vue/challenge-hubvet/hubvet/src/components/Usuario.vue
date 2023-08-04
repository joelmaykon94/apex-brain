<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="4">
        <v-flex>
          <v-img
            :src="require('../assets/usuario.svg')"
            class="mt-10"
            contain
            height="200"
          />
          <v-divider />
        </v-flex>
        <p class="subheading grey--text text--darken-1 font-weight-medium">
          <b class="font-weight-bold">Cuide,</b>
          <b class="font-weight-bold"> monitore</b>
          seu pequeno e tenha acesso aos melhores profissionais veterinários de
          todo território Nacional. Em um ambiente 100% seguro e
          <b class="font-weight-bold">gratuito.</b>
        </p>
      </v-col>
    </v-row>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="3">
        <v-select
          v-model="item"
          color="grey"
          :items="items"
          label="O que você deseja fazer?"
        ></v-select>
        <AlertaSetup :ambiente="'Usuário'" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-row justify="space-around">
          <router-link to="/setup-laboratorio">
            <v-btn class="ma-2" text tile large color="grey">
              <v-icon left>fa fa-angle-left</v-icon>Voltar
            </v-btn>
          </router-link>
          <v-radio-group v-model="radioGroup" row>
            <v-radio color="teal" :value="1" disabled></v-radio>
            <v-radio color="teal" :value="2"></v-radio>
            <v-radio color="teal" :value="3" disabled></v-radio>
            <v-radio color="teal" :value="4" disabled></v-radio>
            <v-radio color="teal" :value="5" disabled></v-radio>
          </v-radio-group>
          <router-link to="/setup-clinica">
            <v-btn class="ma-2" text tile large color="grey">
              Próximo
              <v-icon right>fa fa-angle-right</v-icon>
            </v-btn>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AlertaSetup from "@/components/AlertaSetup.vue";

export default {
  name: "Usuario",
  components: { AlertaSetup },
  data: () => ({
    radioGroup: 2,
    item: "Cuidar do meu Animal",
    items: ["Cuidar do meu Animal"],
  }),
};
</script>
