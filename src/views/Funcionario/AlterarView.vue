<template>
  <alterar-funcionario />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import AlterarFuncionario from "../../components/Funcionario/AlterarFuncionario.vue";

export default defineComponent({
  name: "AlterarView",

  components: {
    AlterarFuncionario,
  },
});
</script>
    