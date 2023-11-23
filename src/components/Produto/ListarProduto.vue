<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar title="Produtos" icon="mdi-package-variant-closed"></titulo-bar>
      <v-col cols="3" v-for="produto in produtos" :key="produto['id']">
        <v-card elevation="10" color="#f4c808">
          <div class="text-start">
            <v-card-title class="text-h5">
              {{ produto["nome"] }}
            </v-card-title>

            <v-card-subtitle>
              <v-chip variant="outlined" class="ma-2" color="black" label>
                <v-icon start icon="mdi-label"></v-icon>
                {{ produto["codigobarra"] }}</v-chip
              >
            </v-card-subtitle>
          </div>
          <v-card-text class="py-0 text-end mt-4">
            <span class="text-h4">
              R$ {{ formatPrice(produto["preco"]) }}
            </span>
          </v-card-text>
          <v-card-actions class="mt-3">
            <v-list-item class="w-100">
              <template v-slot:append>
                <div class="justify-self-end">
                  <v-icon class="me-1" icon="mdi-tag-multiple"></v-icon>
                  <span class="subheading mr-4">{{
                    produto["quantidade"]
                  }}</span>
                  <v-icon class="me-1" icon="mdi-identifier"></v-icon>
                  <span class="subheading">{{ produto["id"] }}</span>
                </div>
              </template>
              <div class="text-left">
                <v-btn color="red" variant="flat"> Deletar </v-btn>
                <v-btn color="dark" variant="text"> Alterar </v-btn>
              </div>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script lang='ts'>
import { defineComponent } from "vue";
import TituloBar from "../TituloBar.vue";

export default defineComponent({
  name: "ListarProduto",
  components: {
    TituloBar,
  },
  data() {
    return {
      produtos: [],
    };
  },
  async mounted() {
    await this.axios
      .get("http://localhost:8080/produto")
      .then((response) => (this.produtos = response.data));
    console.log(this.produtos[0]);
  },
  methods: {
    formatPrice(value: number) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
});
</script>
  