<template>
  <cadastrar-produto />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import CadastrarProduto from "@/components/Produto/CadastrarProduto.vue";

export default defineComponent({
  name: "CadastrarView",

  components: {
    CadastrarProduto,
  },
});
</script>
    