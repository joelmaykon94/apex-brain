<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-left">
            <v-card max-width="450" class="mx-auto">
              <v-list three-line>
                <template v-for="(item, index) in itens">
                  <v-subheader v-if="item.id" :key="item.id"></v-subheader>
                  <v-divider :key="index"></v-divider>

                  <v-list-item :key="item.nome">
                    <v-list-item-avatar class="text-center" justify="center">
                      <v-icon>fas fa-shopping-cart</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="item.nome">
                      </v-list-item-title>
                      <v-list-item-subtitle
                        v-if="item.descricao"
                        v-html="item.descricao"
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle
                        v-if="!item.descricao"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
              <v-divider />
              <v-row>
                <v-col cols="12" class="text-center">
                  Valor Total: R$ {{ valorTotal }}
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
    valorTotal: Number,
    itens: Array
  },
  created() {
    this.receberValorTotal();
  },
  data: () => ({})
};
</script>
