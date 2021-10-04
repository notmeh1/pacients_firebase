<template>
  <div>
    <v-row class="my-10">
      <v-col></v-col>
      <v-col class="my-10">
        <v-card class="text-center">
          <v-card-title class="justify-center"><h1>Acerca</h1></v-card-title>
          <v-card-text
            >Si puedes ver esta página, te has logueado
            exitosamente.</v-card-text
          >
          <v-btn
            class="mb-5 rounded-pill"
            color="error"
            width="200px"
            @click="logOut()"
            >Salir de la cuenta</v-btn
          >
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$store.dispatch("cleanUserData")
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
