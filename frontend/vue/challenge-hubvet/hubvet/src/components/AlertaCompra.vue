<template>
  <v-row justify="center">
    <v-col col="12" align="center">
      <v-btn width="350" color="teal" dark @click.stop="dialog = true">
        <v-icon left>fas fa-sign-in-alt</v-icon>
        Comprar</v-btn
      >
    </v-col>
    <v-dialog v-model="dialog" max-width="490">
      <v-card>
        <v-card-title class="headline">{{ ambiente }}</v-card-title>
        <v-card-text>
          Compra realizada com sucesso agora você já pode desfrutar dos nossos
          benefícios.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <router-link
            :to="{
              name: 'CompraFinalizada',
              params: { valorTotal: valorTotal, itens: itens }
            }"
          >
            <v-btn color="green darken-1" text @click="dialog = false">
              Continuar
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: { ambiente: String, itens: Array, valorTotal: Number },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
