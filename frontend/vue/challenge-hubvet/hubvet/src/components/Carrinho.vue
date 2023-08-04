<template>
  <div>
    <v-row v-if="!carrinho">
      <v-col cols="1" offset-md="10">
        <v-col cols="1">
          <v-btn icon @click="carrinho = !carrinho">
            <v-icon small>fas fa-angle-left</v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row v-if="carrinho">
      <v-col cols="3">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Sigla</span
        >
      </v-col>
      <v-col cols="4">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Nome</span
        >
      </v-col>
      <v-col cols="3">
        <span class="caption text--secondary pl-3 font-weight-medium"
          >Valor</span
        >
      </v-col>
      <v-col cols="1">
        <v-btn icon>
          <v-icon small>fas fa-shopping-cart</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon @click="carrinho = !carrinho">
          <v-icon small>fas fa-angle-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="carrinho">
      <v-col cols="12">
        <v-card>
          <v-row v-for="item in itens" :key="item.id">
            <v-col cols="3">
              <span class="caption text--secondary pl-3 font-weight-regular"
                ><v-btn small outlined color="grey lighten">{{
                  item.sigla
                }}</v-btn></span
              >
            </v-col>
            <v-col cols="4">
              <span class="caption text--secondary pl-3 font-weight-regular">{{
                item.nome
              }}</span>
            </v-col>
            <v-col cols="3">
              <span class="caption text--secondary pl-3 font-weight-regular"
                >R$ {{ item.valor }}</span
              >
            </v-col>
            <v-col cols="1">
              <span class="caption text--secondary pl-3 font-weight-regular">
                <v-btn icon text>
                  <v-icon small color="red lighten-2">fas fa-trash</v-icon>
                </v-btn>
              </span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="7"
              ><span class="caption text--secondary pl-3 font-weight-regular"
                >Valor total</span
              ></v-col
            >
            <v-col cols="5"
              ><span class="caption text--secondary pl-3 font-weight-regular"
                >R$ {{ valorTotal }}</span
              ></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="7"
              ><span class="caption text--secondary pl-3 font-weight-regular"
                >Valor do desconto</span
              ></v-col
            >
            <v-col cols="5"
              ><span class="caption text--secondary pl-3 font-weight-regular"
                >R$ {{ valorDesconto }}</span
              ></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="7"
              ><span class="caption text--secondary pl-3 font-weight-bold"
                >Total com Desconto</span
              ></v-col
            >
            <v-col cols="5"
              ><span class="caption text--secondary pl-3 font-weight-regular"
                >R$ {{ valorTotalComDesconto }}</span
              ></v-col
            >
          </v-row>
          <v-row>
            <v-col cols="12">
              <AlertaCompra :valorTotal="valorTotal" :itens="itens" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AlertaCompra from "@/components/AlertaCompra.vue";
export default {
  components: { AlertaCompra },
  props: {
    itens: Array
  },
  watch: {
    itens: function(value) {
      this.valorTotal = 0;
      for (const i of value) {
        const resultado = parseFloat(this.valorTotal) + parseFloat(i.valor);
        this.valorTotal = resultado
      }
    }
  },
  data: () => ({
    valorDesconto: 0,
    valorTotal: 0,
    valorTotalComDesconto: 0,
    carrinho: true,
  }),
  methods: {
    converterParaReais(resultado) {
      return resultado.toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
    }
  }
};
</script>
