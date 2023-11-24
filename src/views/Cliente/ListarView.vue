<template>
  <listar-cliente />
</template>
  
<script lang="ts">
import ListarCliente from "../../components/Cliente/ListarCliente.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListarView",

  components: {
    ListarCliente,
  },
});
</script>
  