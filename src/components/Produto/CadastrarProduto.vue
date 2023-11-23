<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar
        title="Cadastro de produtos"
        icon="mdi-plus-thick"
      ></titulo-bar>
    </v-row>
    <v-row class="text-center" justify="center">
      <v-col cols="12" class="border" md="6">
        <v-form @submit.prevent="submitForm" fast-fail>
          <v-container>
            <v-row>
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
                <v-btn color="#b81014" type="submit"> Cadastrar </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="text-center" justify="center">
      <v-col cols="4">
        <v-alert border :type="alert.type" v-if="alert.active" closable>
          {{ alert.text }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script lang='ts'>
import { defineComponent } from "vue";
import TituloBar from "../TituloBar.vue";

export default defineComponent({
  components: { TituloBar },
  name: "CadastrarProduto",
  props: {
    preco: Number,
    quantidade: Number,
  },
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
        .finally(() => {
          console.log(this.form);
        });
    },
  },
});
</script>
  