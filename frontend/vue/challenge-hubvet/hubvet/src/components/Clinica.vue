<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="4">
        <v-flex>
          <v-img
            :src="require('../assets/clinica.svg')"
            class="mt-10"
            contain
            height="200"
          />
          <v-divider />
        </v-flex>
        <p class="subheading grey--text text--darken-1 font-weight-medium">
          <b class="font-weight-bold">Gerencie,</b>
          sua Clínica e ainda tenha acesso a centenas de Laboratórios
          veterinários pelo Brasil. Em um ambiente 100% seguro e
          <b class="font-weight-bold">escalável.</b>
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
        <AlertaSetup :ambiente="'Clínica'" />
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
            <v-radio color="teal" :value="2" disabled></v-radio>
            <v-radio color="teal" :value="3"></v-radio>
            <v-radio color="teal" :value="4" disabled></v-radio>
            <v-radio color="teal" :value="5" disabled></v-radio>
          </v-radio-group>
          <v-btn class="ma-2" disabled text tile large color="grey">
            Próximo
            <v-icon right>fa fa-angle-right</v-icon>
          </v-btn>
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
    radioGroup: 3,
    item: "Cuidar da minha clínica",
    items: ["Cuidar da minha clínica"],
  }),
};
</script>
