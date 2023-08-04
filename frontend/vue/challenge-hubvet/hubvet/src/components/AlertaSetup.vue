<template>
  <v-row justify="center">
    <v-btn block color="teal" dark @click.stop="dialog = true"
      >Realizar setup</v-btn
    >
    <v-dialog v-model="dialog" max-width="490">
      <v-card>
        <v-card-title class="headline">Seja bem vindo ao Ambiente: {{ ambiente }}</v-card-title>
        <v-card-text>
          Siga para os próximos passos na nossa plataforma, utilize nosso
          carrinho de compras e passe a desfrutar dos nossos benefícios.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <router-link
            :to="{
              name: 'WorkSpace',
              params: { ambiente: ambiente }
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
  props: { ambiente: String },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
