<template>
  <div>
    <v-app-bar flat dense dark fixed class="mt-5 mx-10 rounded-pill">
      <v-app-bar-title
        ><v-icon>mdi-emoticon-cool-outline</v-icon></v-app-bar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ name: 'Home' }" class="rounded-pill" exact>
          Inicio
        </v-btn>

        <v-btn
          text
          :to="{ name: 'About' }"
          class="rounded-pill"
          v-if="getUserData"
          exact
        >
          Acerca
        </v-btn>
        <v-btn
          text
          :to="{ name: 'Users' }"
          class="rounded-pill"
          v-if="getUserData"
          exact
        >
          Usuarios
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    getUserData() {
      return this.$store.state.login.userData.email;
    },
  },
};
</script>
