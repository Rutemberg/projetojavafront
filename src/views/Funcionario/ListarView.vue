<template>
  <listar-funcionario />
</template>
  
<script lang="ts">
import ListarFuncionario from "../../components/Funcionario/ListarFuncionario.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListarView",

  components: {
    ListarFuncionario,
  },
});
</script>
  