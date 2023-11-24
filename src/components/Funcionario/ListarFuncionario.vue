<template>
  <v-container fluid>
    <v-row class="text-center">
      <titulo-bar title="Funcionarios" icon="mdi-badge-account"></titulo-bar>

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
              label="Procurar funcionario pelo nome"
              append-inner-icon="mdi-magnify"
              v-model="search"
              single-line
              hide-details
              @input="pesquisarfuncionario"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-for="funcionario in funcionarios" :key="funcionario['id']" md="3">
        <v-card elevation="10" color="#f4c808" class="mx-auto">
          <div class="text-start">
            <v-card-title>
              <v-list-item class="w-100">
                <template v-slot:prepend>
                  <v-avatar
                    color="grey-darken-3"
                    image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-avatar>
                </template>

                <v-list-item-title>{{ funcionario["nome"] }}</v-list-item-title>

                <v-list-item-subtitle>{{
                  funcionario["email"]
                }}</v-list-item-subtitle>

                <template v-slot:append>
                  <div class="justify-self-end">
                    <v-badge
                      :content="
                        JSON.parse(JSON.stringify(funcionario['enderecos'])).length
                      "
                      color="error"
                    >
                      <v-icon>mdi-map-marker</v-icon>
                    </v-badge>
                  </div>
                </template>
              </v-list-item>
            </v-card-title>

            <v-card-subtitle>
              <v-chip class="ma-2" color="black" label>
                <v-icon start icon="mdi-phone"></v-icon>
                {{ funcionario["telefone"] }}</v-chip
              >
              <v-chip class="ma-2" color="black" label>
                <v-icon start icon="mdi-card-account-details-outline"></v-icon>
                {{ funcionario["cpf"] }}</v-chip
              >
            </v-card-subtitle>
          </div>
          <v-card-text class="py-0 text-end mt-4"> </v-card-text>
          <v-card-actions class="mt-3">
            <v-list-item class="w-100">
              <template v-slot:append>
                <v-icon class="me-1" icon="mdi-identifier"></v-icon>
                <span class="subheading">{{ funcionario["id"] }}</span>
              </template>

              <div class="text-left">
                <v-btn
                  color="red"
                  variant="flat"
                  @click="deletefuncionario(funcionario['id'])"
                >
                  Deletar
                </v-btn>
                <v-btn
                  color="dark"
                  variant="text"
                  :to="`/funcionario/${funcionario['id']}`"
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
  name: "ListarFuncionario",
  components: {
    TituloBar,
  },
  data() {
    return {
      funcionarios: [],
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
      .get("http://localhost:8080/funcionario")
      .then((response) => (this.funcionarios = response.data));
  },
  methods: {
    async deletefuncionario(value: number) {
      await this.axios
        .delete(`http://localhost:8080/funcionario/${value}`)
        .then((response) => {
          if (response.status == 200) {
            this.alert.active = true;
            this.alert.type = "success";
            this.alert.text = "Cliente excluido com sucesso";
          }
        })
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "error";
          this.alert.text = "Erro ao excluir o funcionario";
        })
        .finally(async () => {
          await this.axios
            .get(`http://localhost:8080/funcionario/search?nome=${this.search}`, {})
            .then((response) => (this.funcionarios = response.data));
        });
    },
    /* eslint-disable */
    async pesquisarfuncionario(event: any) {
      this.loading = true;
      await this.axios
        .get(
          `http://localhost:8080/funcionario/search?nome=${event.target.value}`,
          {}
        )
        .then((response) => (this.funcionarios = response.data))
        .catch(() => {
          this.alert.active = true;
          this.alert.type = "info";
          this.alert.text = "Nenhum funcionario encontrado";
        });
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 1000);
    },
  },
});
</script>
  