<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar
        title="Cadastro de funcionario"
        icon="mdi-badge-account"
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
                    v-model="funcionario.nome"
                    label="Nome"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="funcionario.cpf"
                    label="CPF"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="funcionario.telefone"
                    label="Telefone"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="funcionario.email"
                    label="Email"
                    type="email"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6"></v-col>

                <v-col cols="4">
                  <v-text-field
                    v-model="funcionario.matricula"
                    label="Matricula"
                    hide-details
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="funcionario.cargo"
                    label="Cargo"
                    hide-details
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="funcionario.salario"
                    label="Salario"
                    hide-details
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-divider class="my-5"></v-divider>
                <v-row
                  class="w-100"
                  v-for="(endereco, i) in funcionario.enderecos"
                  :key="i"
                >
                  <v-col cols="4">
                    <v-text-field
                      label="Rua"
                      v-model="endereco['rua']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      label="Cidade"
                      v-model="endereco['cidade']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      label="Estado"
                      v-model="endereco['estado']"
                      append-icon="mdi-minus-box"
                      @click:append="removerendereco(i)"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-col cols="12">
                  <v-btn
                    icon="mdi-map-marker-plus"
                    variant="tonal"
                    @click="adicionarrendereco"
                  ></v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    variant="text"
                    color="#b81014"
                    icon="mdi-view-list"
                    size="x-large"
                    class="mr-3"
                    to="/funcionarios"
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
  name: "CadastrarFuncionario",
  data() {
    return {
      funcionario: {
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        matricula: "",
        cargo: "",
        salario: 0,
        /* eslint-disable */
        enderecos: [] as Array<any>,
      },
      alert: {
        active: false,
        type: "info",
        text: "",
      },
    };
  },
  methods: {
    removerendereco(i: number) {
      this.funcionario.enderecos.splice(i, 1);
      console.log(this.funcionario.enderecos);
    },
    adicionarrendereco() {
      this.funcionario.enderecos.push({ rua: "", cidade: "", estado: "" });
      console.log(this.funcionario.enderecos);
    },
    async submitForm() {
      await this.axios
        .post("http://localhost:8080/funcionario", this.funcionario)
        .then((response) => {
          if (response.status == 201) {
            this.alert.active = true;
            this.alert.type = "success";
            this.alert.text = "Funcionario cadastrado com sucesso";
          }
        })
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "error";
          this.alert.text = "Erro ao cadastrar o funcionario";
        });
    },
  },
});
</script>
  