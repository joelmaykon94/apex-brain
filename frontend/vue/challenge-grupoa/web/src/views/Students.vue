<template>
  <layout-student modulo="Módulo Acadêmico" title="Consulta de alunos">
    <table-student />
  </layout-student>
</template>
<script>
import LayoutStudent from "@/components/layouts/Students";
import TableStudent from "@/components/tables/Students"

export default {
  components: {
    LayoutStudent,
    TableStudent
  },
};
</script>