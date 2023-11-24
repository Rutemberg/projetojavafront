<template>
  <alterar-cliente />
</template>
    
  <script lang="ts">
import { defineComponent } from "vue";

// Components
import AlterarCliente from "../../components/Cliente/AlterarCliente.vue";

export default defineComponent({
  name: "AlterarView",

  components: {
    AlterarCliente,
  },
});
</script>
    