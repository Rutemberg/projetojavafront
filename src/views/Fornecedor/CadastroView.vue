<template>
  <cadastrar-fornecedor />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import CadastrarFornecedor from "../../components/Fornecedor/CadastrarFornecedor.vue";

export default defineComponent({
  name: "CadastrarView",

  components: {
    CadastrarFornecedor,
  },
});
</script>
    