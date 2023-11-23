<template>
    <listar-produto />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

// Components
import ListarProduto from '../../components/Produto/ListarProduto.vue';

export default defineComponent({
    name: 'ListarView',

    components: {
        ListarProduto,
    },
});
</script>
  