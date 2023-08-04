<template>
  <v-footer >
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <v-icon>mdi-home</v-icon>
      <strong>Desenvolvedor: Joel Maykon</strong>
    </v-col>
    <v-tooltip v-model="show" top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          absolute
          dark
          fab
          buttom
          outlined
          right
          small
          color="grey"
        >
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </template>
      <span>Central de ajuda</span>
    </v-tooltip>
  </v-footer>
</template>

<script>
export default {
  name: "BemVindo",
  data: () => ({
    show: false
  })
};
</script>
