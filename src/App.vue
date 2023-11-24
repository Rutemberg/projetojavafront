<template>
  <v-app id="inspire">
    <v-app-bar color="#B81014" flat height="72">
      <v-app-bar-title
        ><v-img width="100" src="./assets/RubaoSemFundo.png"></v-img
      ></v-app-bar-title>
    </v-app-bar>

    <v-footer app color="#F4C808" height="20"></v-footer>

    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          color="#B81014"
          prepend-icon="mdi-home"
          title="Home"
          to="/"
        ></v-list-item>

        <v-list-group v-for="(item, i) in menu" :key="i">
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
            :value="title"
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
      menu: [
        {
          title: "Produto",
          icon: "mdi-package-variant-closed",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/produto"],
            ["Listar", "mdi-view-list", "/produtos"],
          ],
        },
        {
          title: "Fornecedor",
          icon: "mdi-archive-outline",
          crud: [
            ["Cadastrar", "mdi-plus-thick", "/produto"],
            ["Listar", "mdi-view-list", "/produtos"],
          ],
        },
      ],
    };
  },
});
</script>
