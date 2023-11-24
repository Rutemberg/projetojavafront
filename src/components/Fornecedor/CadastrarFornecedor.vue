<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar
        title="Cadastro de fornecedor"
        icon="mdi-archive-arrow-down-outline"
      ></titulo-bar>
    </v-row>
    <v-row class="text-center" justify="center">
      <v-col cols="12" md="6">
        <v-sheet color="#f4c808" rounded>
          <v-form @submit.prevent="submitForm" fast-fail>
            <v-container>
              <v-row class="pa-6">
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="fornecedor.nome"
                    label="Nome"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="fornecedor.cnpj"
                    label="CNPJ"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="fornecedor.telefone"
                    label="Telefone"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-divider class="my-5"></v-divider>
                <v-row
                  class="w-100"
                  v-for="(produto, i) in fornecedor.produtos"
                  :key="i"
                >
                  <v-col cols="3">
                    <v-text-field
                      label="Nome produto"
                      density="compact"
                      v-model="produto['nome']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      label="Preco produto"
                      density="compact"
                      v-model="produto['preco']"
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      label="Codigo de barra"
                      density="compact"
                      v-model="produto['codigobarra']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      label="Quantidade"
                      density="compact"
                      v-model="produto['quantidade']"
                      type="number"
                      append-icon="mdi-minus-box"
                      @click:append="removerproduto(i)"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-col cols="12">
                  <v-btn
                    icon="mdi-tag-outline"
                    variant="tonal"
                    @click="adicionarproduto"
                  ></v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    variant="text"
                    color="#b81014"
                    icon="mdi-view-list"
                    size="x-large"
                    class="mr-3"
                    to="/fornecedores"
                  ></v-btn>
                  <v-btn color="#b81014" type="submit"> Cadastrar </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-sheet>
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
  components: { TituloBar },
  name: "CadastrarFornecedor",
  data() {
    return {
      fornecedor: {
        nome: "",
        cnpj: "",
        telefone: "",
        /* eslint-disable */
        produtos: [] as Array<any>,
      },
      alert: {
        active: false,
        type: "info",
        text: "",
      },
    };
  },
  methods: {
    removerproduto(i: number) {
      this.fornecedor.produtos.splice(i, 1);
      console.log(this.fornecedor.produtos);
    },
    adicionarproduto() {
      this.fornecedor.produtos.push({
        nome: "",
        preco: 0,
        quantidade: "",
        codigobarra: 0,
      });
      console.log(this.fornecedor.produtos);
    },
    async submitForm() {
      await this.axios
        .post("http://localhost:8080/fornecedor", this.fornecedor)
        .then((response) => {
          if (response.status == 201) {
            this.alert.active = true;
            this.alert.type = "success";
            this.alert.text = "Fornecedor cadastrado com sucesso";
          }
        })
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "error";
          this.alert.text = "Erro ao cadastrar o fornecedor";
        });
    },
  },
});
</script>
  