<template>
  <layout-student modulo="Módulo Acadêmico" title="Cadastro de alunos">
    <form-student :student="student" :type="type" :readonly="readonly" />
  </layout-student>
</template>
<script>
import LayoutStudent from "@/components/layouts/Students";
import FormStudent from "@/components/forms/Students";

export default {
  props: {
    student: Object,
    type: String,
    readonly: Boolean,
  },
  components: {
    LayoutStudent,
    FormStudent,
  },
};
</script>