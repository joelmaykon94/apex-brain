<template>
  <v-dialog v-model="dialog" persistent max-width="390">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">
        <v-icon left small @click="deleteItem(item)"> mdi-delete </v-icon>
        Excluir</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="title">
        Deseja realmente excluir o aluno(a) <br />{{ name }}?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red lighten-1"
          class="white--text"
          @click="dialog = false"
        >
          não
        </v-btn>
        <v-btn
          color="green lighten-1"
          class="white--text"
          @click="(dialog = false), deleteStudent()"
        >
          sim
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

const http = axios;
const url = process.env.VUE_APP_URL_API;

export default {
  props: { student: Object },
  data() {
    return {
      dialog: false,
      name: "",
    };
  },
  created() {
    if (this.student) this.name = this.student.name;
  },
  methods: {
    async deleteStudent() {
      await http
        .delete(`${url}/students/${this.student.id}`)
        .then((response) => {
          if (response.status == 200) {
            this.$emit("updateListStudents");
          }
        });
    },
  },
};
</script>