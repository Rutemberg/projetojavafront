<template>
  <cadastrar-funcionario />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import CadastrarFuncionario from "../../components/Funcionario/CadastrarFuncionario.vue";

export default defineComponent({
  name: "CadastrarView",

  components: {
    CadastrarFuncionario,
  },
});
</script>
    