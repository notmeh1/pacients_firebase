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
    <v-snackbar
      v-model="logIn.snackbar"
      :timeout="logIn.timeout"
      color="success"
      right
    >
      <v-icon class="mx-3">mdi-check</v-icon>
      {{ logIn.text }}
    </v-snackbar>
    <!-- --->
    <v-snackbar
      v-model="add.snackbar"
      :timeout="add.timeout"
      color="success"
      right
    >
      <v-icon class="mx-3">mdi-check</v-icon>
      {{ add.text }}
    </v-snackbar>
    <v-snackbar
      v-model="edit.snackbar"
      :timeout="edit.timeout"
      color="primary"
      right
    >
      <v-icon class="mx-3">mdi-check</v-icon>
      {{ edit.text }}
    </v-snackbar>
    <v-snackbar
      v-model="erase.snackbar"
      :timeout="erase.timeout"
      color="error"
      right
    >
      <v-icon class="mx-3">mdi-alert-circle</v-icon>
      {{ erase.text }}
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
    },
    add() {
      return this.$store.state.snackbar.addAlert;
    },
    edit() {
      return this.$store.state.snackbar.editAlert;
    },
    erase() {
      return this.$store.state.snackbar.eraseAlert;
    },
  },
};
</script>
