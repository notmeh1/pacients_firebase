<template>
  <div>
    <v-snackbar
      v-model="logIn.snackbar"
      :timeout="logIn.timeout"
      color="success"
      right
    >
      <v-icon class="mx-3">mdi-check</v-icon>
      {{ logIn.text }}
    </v-snackbar>
    <v-snackbar
      v-model="logOut.snackbar"
      :timeout="logOut.timeout"
      color="error"
      right
    >
      <v-icon class="mx-3">mdi-alert-circle</v-icon>
      {{ logOut.text }}
    </v-snackbar>
        <v-snackbar
      v-model="errorLog.snackbar"
      :timeout="errorLog.timeout"
      color="error"
      right
    >
      <v-icon class="mx-3">mdi-alert-circle</v-icon>
      {{ errorLog.text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  // cambiar computed methods por mapStates
  computed: {
    logIn() {
      return this.$store.state.snackbar.logInAlert;
    },
    logOut() {
      return this.$store.state.snackbar.logOutAlert;
    },
    errorLog() {
      return this.$store.state.snackbar.errorLogAlert;
    }
  },
};
</script>
