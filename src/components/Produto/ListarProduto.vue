<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar
        title="Produtos"
        icon="mdi-tag-outline"
      ></titulo-bar>

      <v-col cols="12">
        <v-card
          class="mx-auto"
          color="grey-lighten-3"
          max-width="500"
          elevation="0"
        >
          <v-card-text>
            <v-text-field
              :loading="loading"
              label="Procurar produto pelo nome"
              append-inner-icon="mdi-magnify"
              v-model="search"
              single-line
              hide-details
              @input="onClick"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3" v-for="produto in produtos" :key="produto['id']">
        <v-card elevation="10" color="#f4c808">
          <div class="text-start">
            <v-card-title>
              <v-list-item class="w-100">
                <template v-slot:prepend>
                  <v-avatar color="#B81014">
                    <v-icon icon="mdi-tag-outline"></v-icon>
                  </v-avatar>
                </template>

                <v-list-item-title>{{ produto["nome"] }}</v-list-item-title>

                <v-list-item-subtitle>{{
                  produto["email"]
                }}</v-list-item-subtitle>

                <template v-slot:append>
                  <div class="justify-self-end">
                    <v-badge :content="produto['quantidade']" color="error">
                      <v-icon>mdi-tag-multiple</v-icon>
                    </v-badge>
                  </div>
                </template>
              </v-list-item>
            </v-card-title>

            <v-card-subtitle>
              <v-chip class="ma-2" color="black" label>
                <v-icon start icon="mdi-currency-usd"></v-icon>
                {{ produto["preco"] }}</v-chip
              >
              <v-chip class="ma-2" color="black" label>
                <v-icon start icon="mdi-barcode"></v-icon>
                {{ produto["codigobarra"] }}</v-chip
              >
            </v-card-subtitle>
          </div>
          <v-card-text class="py-0 text-end mt-4"> </v-card-text>
          <v-card-actions class="mt-3">
            <v-list-item class="w-100">
              <template v-slot:append>
                <v-icon class="me-1" icon="mdi-identifier"></v-icon>
                <span class="subheading">{{ produto["id"] }}</span>
              </template>

              <div class="text-left">
                <v-btn
                  color="red"
                  variant="flat"
                  @click="deleteproduct(produto['id'])"
                >
                  Deletar
                </v-btn>
                <v-btn
                  color="dark"
                  variant="text"
                  :to="`/produto/${produto['id']}`"
                >
                  Alterar
                </v-btn>
              </div>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center">
    <v-snackbar
      multi-line
      :color="alert.type"
      elevation="24"
      :timeout="2000"
      v-model="alert.active"
      height="50"
    >
      {{ alert.text }}

      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="alert.active = false"
          icon="mdi-close"
        >
        </v-btn>
      </template>
    </v-snackbar>
  </div>
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
      alert: {
        active: false,
        type: "info",
        text: "",
      },
      loaded: false,
      loading: false,
      search: "",
    };
  },
  async mounted() {
    await this.axios
      .get("http://localhost:8080/produto")
      .then((response) => (this.produtos = response.data));
  },
  methods: {
    formatPrice(value: number) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async deleteproduct(value: number) {
      await this.axios
        .delete(`http://localhost:8080/produto/${value}`)
        .then((response) => {
          if (response.status == 200) {
            this.alert.active = true;
            this.alert.type = "success";
            this.alert.text = "Produto excluido com sucesso";
          }
        })
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "error";
          this.alert.text = "Erro ao excluir o produto";
        })
        .finally(async () => {
          await this.axios
            .get(`http://localhost:8080/produto/search?nome=${this.search}`, {})
            .then((response) => (this.produtos = response.data));
        });
    },
    /* eslint-disable */
    async onClick(event: any) {
      this.loading = true;
      await this.axios
        .get(
          `http://localhost:8080/produto/search?nome=${event.target.value}`,
          {}
        )
        .then((response) => (this.produtos = response.data))
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "info";
          this.alert.text = "Nenhum produto encontrado";
        });
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 1000);
    },
  },
});
</script>
  