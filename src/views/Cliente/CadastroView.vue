<template>
  <cadastrar-cliente />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import CadastrarCliente from "../../components/Cliente/CadastrarCliente.vue";

export default defineComponent({
  name: "CadastrarView",

  components: {
    CadastrarCliente,
  },
});
</script>
    