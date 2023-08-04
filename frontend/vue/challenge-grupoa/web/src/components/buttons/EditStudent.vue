<template>
  <router-link
    :to="{
      name: nameComponent,
      params: { student: student, type: type, readonly: readonly },
    }"
  >
    <v-btn text>
      <v-icon small class="mr-2"> mdi-pencil </v-icon>
      Editar</v-btn
    >
  </router-link>
</template>
<script>
export default {
  props: {
    student: Object,
  },
  data() {
    return {
      type: "edit",
      readonly: true,
      nameComponent: "FormEdit",
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>