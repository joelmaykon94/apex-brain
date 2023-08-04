<template>
  <v-app id="inspire">
    <BarraNavegacao :drawer="drawer" />
    <v-app-bar app color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img :src="require('../assets/logo.svg')" />
      </v-toolbar-title>
      <v-divider class="mx-4" vertical inset />
      {{ ambiente }}
      <v-spacer></v-spacer>
      <v-icon left>fas fa-search</v-icon>
      <v-icon left>fas fa-calendar</v-icon>
      <v-icon left>fas fa-bell</v-icon>
      <v-avatar>
      <v-img
        :src="require('../assets/brazil.png')"
        height="35"
        width="10"
        contain
      />
      </v-avatar>
      <span class="mx-2 caption text--grey">português</span>
      <v-icon left small>fas fa-caret-down</v-icon>
      <v-divider class="mx-4" vertical inset />
      <v-icon left>fas fa-ellipsis-v</v-icon>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height grey lighten-3" fluid>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-text-field
              elevation="4"
              solo
              prepend-inner-icon="fas fa-search"
              placeholder="Buscar por itens ..."
              color="grey"
              v-model="busca"
            ></v-text-field>
          </v-col>
          <v-col md="2">
            <v-checkbox
              v-model="filtroItens"
              label="Itens"
              color="teal"
            ></v-checkbox>
          </v-col>
          <v-col md="2">
            <v-checkbox
              v-model="filtroGrupos"
              label="Grupos"
              color="teal"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <ListaItensGrupos
              :itens="itensFiltrados"
              @itemSelecionado="receberItemSelecionado"
            />
          </v-col>
          <v-col cols="4">
            <Carrinho :itens="itensSelecionados" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import BarraNavegacao from "@/components/BarraNavegacao.vue";
import ListaItensGrupos from "@/components/ListaItensGrupos.vue";
import Carrinho from "@/components/Carrinho.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "WorkSpace",
  components: {
    BarraNavegacao,
    ListaItensGrupos,
    Carrinho,
    Footer
  },
  methods: {
    receberItemSelecionado(item) {
      if (item.selecionado) {
        this.itensSelecionados.push(item);
        this.adicionarSubitens(item);
      } else {
        this.itensSelecionados = this.retirarItem(this.itensSelecionados, item);
        this.removerSubitens(item);
      }
    },
    adicionarSubitens(item) {
      if (item.itens) {
        item.itens.forEach(element => {
          this.itensSelecionados.push(element);
        });
      }
    },
    removerSubitens(item) {
      if (item.itens) {
        item.itens.forEach(element => {
          this.itensSelecionados = this.retirarItem(
            this.itensSelecionados,
            element
          );
        });
      }
    },
    retirarItem(itens, item) {
      const restoItens = itens.filter(function(valor) {
        return valor.nome !== item.nome;
      });
      return restoItens;
    }
  },
  computed: {
    itensFiltrados() {
      if (this.busca) {
        return this.itens.filter(item => {
          return item.nome.match(this.busca);
        });
      } else {
        return this.itens;
      }
    }
  },
  props: {
    source: String,
    ambiente: String
  },
  data: () => ({
    drawer: true,
    busca: "",
    filtroItens: true,
    filtroGrupos: false,
    itensSelecionados: [],
    itens: [
      {
        id: 1,
        tipo: "item",
        sigla: "GLIC",
        nome: "Item 1",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 2,
        sigla: "GLIC 2",
        tipo: "item",
        nome: "Item 2",
        prazo: 0,
        valor: 25.76,
        descricao:
          "Aqui irão conter mais informações sobre o item (Ex: Descrição )",
        itens: [],
        selecionado: false
      },
      {
        id: 3,
        sigla: "GP 1",
        tipo: "grupo",
        nome: "Grupo 1",
        prazo: 0,
        valor: 19.68,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 4,
        sigla: "GP 2",
        tipo: "grupo",
        nome: "Grupo 2",
        prazo: 2,
        valor: 60.03,
        descricao: "",
        itens: [
          {
            id: 9,
            sigla: "IT7",
            nome: "Item 7",
            tipo: "item",
            prazo: 2,
            valor: 18.07,
            selecionado: false
          },
          {
            id: 6,
            sigla: "IT3",
            tipo: "item",
            nome: "Item 3",
            prazo: 1,
            valor: 18.07,
            selecionado: false
          },
          {
            id: 7,
            sigla: "IT6",
            tipo: "item",
            nome: "Item 6",
            prazo: 1,
            valor: 23.89,
            selecionado: false
          }
        ],
        selecionado: false
      },
      {
        id: 8,
        sigla: "GP 3",
        tipo: "grupo",
        nome: "Grupo 3",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 9,
        sigla: "IT 7",
        tipo: "item",
        nome: "Item 7",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      },
      {
        id: 10,
        sigla: "IT20",
        tipo: "item",
        nome: "Item 20",
        prazo: 0,
        valor: 25.76,
        descricao: "",
        itens: [],
        selecionado: false
      }
    ]
  })
};
</script>
