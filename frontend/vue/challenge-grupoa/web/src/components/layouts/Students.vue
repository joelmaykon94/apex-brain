<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="grey">
        <v-list-item-content>
          <v-list-item class="title">
            <span class="white--text">{{ modulo }}</span>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content @click="pageModule()">
            <v-list-item-title>Acadêmico</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item @click="pageStudents()" color="grey">
          <v-list-item-icon>
            <v-icon>mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Alunos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list> </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="grey lighten-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row>
        <v-img
          contain
          max-width="100"
          max-height="80"
          src="https://www.grupoa.com.br/hs-fs/hubfs/logo-grupoa.png?width=300&name=logo-grupoa.png"
        ></v-img>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title class="black--text">{{ title }}</v-toolbar-title>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: { title: String, modulo: String },
  data: () => ({ drawer: null }),
  methods: {
    pageStudents() {
      this.$router.push("/list-students");
    },
    pageModule() {
      this.$router.push("/");
    },
  },
};
</script>