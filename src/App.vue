<template>
  <v-app id="inspire">
    <v-app-bar color="#B81014" flat height="72">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title
        ><v-img width="100" src="./assets/RubaoSemFundo.png"></v-img
      ></v-app-bar-title>
    </v-app-bar>

    <v-footer app color="#F4C808" height="20"></v-footer>

    <v-navigation-drawer expand-on-hover rail v-model="drawer">
      <v-list>
        <v-list-item
          color="#B81014"
          prepend-icon="mdi-home"
          title="Home"
          to="/"
        ></v-list-item>

        <v-list-group v-for="(item, i) in menu" :key="i" :value="item.title">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              color="#B81014"
              :prepend-icon="item.icon"
              :title="item.title"
            ></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon, link], i) in item.crud"
            :key="i"
            :value="item.title"
            :title="title"
            :prepend-icon="icon"
            :to="link"
            color="#B81014"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      drawer: true,
      menu: [
        {
          title: "Produto",
          icon: "mdi-tag-outline",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/produto"],
            ["Listar", "mdi-view-list", "/produtos"],
          ],
        },
        {
          title: "Cliente",
          icon: "mdi-account",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/cliente"],
            ["Listar", "mdi-view-list", "/clientes"],
          ],
        },
        {
          title: "Funcionario",
          icon: "mdi-badge-account",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/funcionario"],
            ["Listar", "mdi-view-list", "/funcionarios"],
          ],
        },
        {
          title: "Fornecedor",
          icon: "mdi-archive-arrow-down-outline",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/fornecedor"],
            ["Listar", "mdi-view-list", "/fornecedores"],
          ],
        },
      ],
    };
  },
});
</script>
