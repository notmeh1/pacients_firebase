<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
      <SnackbarAlerts/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import SnackbarAlerts from "./components/snackbars.vue"
export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
    SnackbarAlerts,
  },
};
</script>

<style scoped></style>
