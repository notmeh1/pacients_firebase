<template>
  <v-card class="text-center" flat>
    <v-card-title class="justify-center"
      ><h1>Entra a tu cuenta</h1>
    </v-card-title>
    <v-form class="mx-5" ref="form" v-model="valid">
      <v-card-subtitle><h3>Correo electrónico</h3></v-card-subtitle>
      <v-text-field
        class="rounded-pill centerPH px-15"
        dense
        type="email"
        :rules="emailRules"
        prepend-inner-icon="mdi-account"
        placeholder="Escribe tu correo aquí"
        filled
        outlined
        required
        v-model="loginData.email"
      />
      <v-card-subtitle><h3>Contraseña</h3></v-card-subtitle>
      <v-text-field
        class="rounded-pill centerPH px-15"
        dense
        type="password"
        :rules="[(v) => !!v || 'Por favor escribe tu contraseña']"
        prepend-inner-icon="mdi-lock"
        placeholder="Escribe tu contraseña aquí"
        filled
        outlined
        required
        v-model="loginData.password"
      />
      <v-btn
        class="my-2 rounded-pill"
        color="success"
        width="200px"
        @click="logIn()"
        :disabled="!valid"
        >Ingresar</v-btn
      >
    </v-form>
  </v-card>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Home",
  data: () => ({
    valid: true,
    emailRules: [
      (v) => !!v || "Por favor escribe tu correo",
      (v) => /.+@.+\..+/.test(v) || "El correo debe ser valido",
    ],
    loginData: {
      email: "",
      password: "",
    },
  }),
  methods: {
    logIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        this.loginData.email,
        this.loginData.password
      )
        .then((userCredential) => {
          // Signed in
          this.$store.dispatch("submitUserData", this.loginData);
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/about");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          this.$store.state.snackbar.errorLogAlert.snackbar = true;
        });
      console.log(
        "email: ",
        this.loginData.email,
        " ||",
        "password: ",
        this.loginData.password
      );
    },
  },
  components: {},
};
</script>

<style scoped>
.centerPH >>> input {
  text-align: center;
}
</style>
