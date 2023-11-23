<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-icon
          icon="mdi-package-variant-closed"
          color="red"
          size="100"
        ></v-icon>
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">Produtos</h1>
      </v-col>

      <v-col cols="3" v-for="produto in produtos" :key="produto['id']">
        <v-card elevation="10" color="#f4c808">
          <div class="text-start">
            <v-card-title class="text-h5">
              {{ produto["nome"] }}
            </v-card-title>

            <v-card-subtitle>{{ produto["codigobarra"] }}</v-card-subtitle>
          </div>
          <v-card-text class="py-0 text-end mt-4">
            <span class="text-h4"> R$ {{ produto["preco"] }} </span>
          </v-card-text>

          <v-card-actions>
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

export default defineComponent({
  name: "ListarProduto",

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
});
</script>
  