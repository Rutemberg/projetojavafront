<template>
  <v-app id="inspire">

    <v-app-bar color="#B81014" flat height="72">
      <v-app-bar-title><v-img width="100" src="./assets/Rubao.png"></v-img></v-app-bar-title>
    </v-app-bar>

    <v-footer app color="#F4C808" height="20"></v-footer>

    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-package-variant-closed" title="Produtos"></v-list-item>
          </template>
          <v-list-item v-for="([title, icon, link], i) in crud_produto" :key="i" :value="title" :title="title"
            :prepend-icon="icon" :to="link"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      crud_produto: [
        ['Cadastrar', 'mdi-plus', "/"],
        ['Listar', 'mdi-view-list', "/produtos"],
      ]
    }
  },
})
</script>
