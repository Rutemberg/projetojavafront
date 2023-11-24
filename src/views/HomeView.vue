<template>
  <home-site />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import HomeSite from "../components/HomeSite.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HomeSite,
  },
});
</script>
