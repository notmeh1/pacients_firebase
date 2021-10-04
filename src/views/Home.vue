<template>
  <div>
    <v-row class="my-10">
      <v-col class="mt-10 ml-10 pr-0">
        <v-card>
          <v-img src="../assets/home-bg.png" height="355px" position=bottom></v-img>
        </v-card>
      </v-col>
      <v-col class="mt-10 mr-10 pl-0">
        <Login />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "../components/login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style scoped></style>
