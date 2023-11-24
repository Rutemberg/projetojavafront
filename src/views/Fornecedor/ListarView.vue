<template>
  <listar-fornecedor />
</template>
  
<script lang="ts">
import ListarFornecedor from "../../components/Fornecedor/ListarFornecedor.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListarView",

  components: {
    ListarFornecedor,
  },
});
</script>
  