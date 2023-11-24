<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar
        title="Cadastro de produto"
        icon="mdi-package-variant-closed"
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
                    v-model="form.nome"
                    label="Nome"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="form.quantidade"
                    label="Quantidade"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="form.preco"
                    label="Preço"
                    hide-details
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="form.codigobarra"
                    label="Código de barra"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-btn
                    variant="text"
                    color="#b81014"
                    icon="mdi-backspace-outline"
                    size="x-large"
                    class="mr-3"
                    to="/produtos"
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
  name: "CadastrarProduto",
  data() {
    return {
      form: {
        nome: "",
        preco: 0,
        quantidade: 0,
        codigobarra: "",
      },
      alert: {
        active: false,
        type: "info",
        text: "",
      },
    };
  },
  methods: {
    async submitForm() {
      await this.axios
        .post("http://localhost:8080/produto", this.form)
        .then((response) => {
          if (response.status == 201) {
            this.alert.active = true;
            this.alert.type = "success";
            this.alert.text = "Produto cadastrado com sucesso";
          }
        })
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "error";
          this.alert.text = "Erro ao cadastrar o produto";
        })
    },
  },
});
</script>
  