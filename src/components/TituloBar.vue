<template>
  <v-col cols="12">
    <v-icon :icon="icon" color="#b81014" size="100"></v-icon>
  </v-col>

  <v-col cols="12">
    <h1 class="display-2 font-weight-bold mb-3">{{ title }}</h1>
  </v-col>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TituloBar",
  props: ["title", "icon"],

  data() {
    return {};
  },
});
</script>