<template>
  <v-container fluid class="h-100">
    <v-row class="h-100 align-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/RubaoSemFundo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSite",

  data() {
    return {};
  },
});
</script>
