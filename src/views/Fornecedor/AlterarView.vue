<template>
  <alterar-fornecedor />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import AlterarFornecedor from "../../components/Fornecedor/AlterarFornecedor.vue";

export default defineComponent({
  name: "AlterarView",

  components: {
    AlterarFornecedor,
  },
});
</script>
    