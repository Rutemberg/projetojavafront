<template>
  <alterar-produto />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import AlterarProduto from "@/components/Produto/AlterarProduto.vue";

export default defineComponent({
  name: "AlterarView",

  components: {
    AlterarProduto,
  },
});
</script>
    