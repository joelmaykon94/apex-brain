<template>
  <v-container fill-height fluid>
    <v-row class="text-left" align="center" justify="center">
      <v-col cols="4">
        <v-flex>
          <v-img
            :src="require('../assets/laboratorio.svg')"
            class="mt-10"
            contain
            height="200"
          />
          <v-divider />
        </v-flex>
        <p class="subheading grey--text text--darken-1 font-weight-medium pb-6">
          <b class="font-weight-bold">Cuide</b> e
          <b class="font-weight-bold">Aumente</b> a
          <b class="font-weight-bold">receita</b> do seu
          <b class="font-weight-bold">Laboratório.</b><br />
          Ofereça à seus clientes um ambiente
          <b class="font-weight-bold">seguro</b> e
          <b class="font-weight-bold">eficaz.</b>
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
       <AlertaSetup :ambiente="'Laboratório'"/>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-row justify="space-around">
          <router-link to="/">
            <v-btn class="ma-2" text tile large color="grey">
              <v-icon left>fa fa-angle-left</v-icon>Voltar
            </v-btn>
          </router-link>
          <v-radio-group v-model="radioGroup" row>
            <v-radio color="teal" :value="1"></v-radio>
            <v-radio color="teal" :value="2" disabled></v-radio>
            <v-radio color="teal" :value="3" disabled></v-radio>
            <v-radio color="teal" :value="4" disabled></v-radio>
            <v-radio color="teal" :value="5" disabled></v-radio>
          </v-radio-group>
          <router-link to="/setup-usuario">
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
import AlertaSetup from "@/components/AlertaSetup.vue"

export default {
  name: "Laboratorio",
  components:{AlertaSetup},
  data: () => ({
    radioGroup: 1,
    item: "Cuidar do meu Laboratório",
    items: ["Cuidar do meu Laboratório"],
  }),
};
</script>
