<template>
  <v-card color="blue-grey darken-3" class="pa-5">
    <v-card-title><h1>Agregar nuevo paciente</h1></v-card-title>
    <v-form ref="form" v-model="valid">
      <v-text-field
        :rules="[(v) => !!v || 'Por favor escribe el nombre del paciente']"
        required
        label="Nombre"
        v-model="editPacient.nombre"
      />
      <v-text-field
        :rules="[(v) => !!v || 'Por favor escribe el apellido del paciente']"
        required
        label="Apellido"
        v-model="editPacient.apellido"
      />
      <v-text-field
        :rules="[(v) => !!v || 'Por favor escribe la edad del paciente']"
        required
        label="Edad"
        type="number"
        min="1"
        max="150"
        v-model="editPacient.edad"
      />
      <v-select
        :items="previsionList"
        :rules="[(v) => !!v || 'Por favor elige una prevision']"
        required
        label="Prevision"
        v-model="editPacient.prevision"
      ></v-select>
      <v-form> </v-form>
      <div class="d-flex">
        <v-btn color="success" @click="editPacient()" :disabled="!valid">Guardar cambios</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="editPacientOverlay = !editPacientOverlay"
          >Cerrar</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    previsionList: ["fonasa", "isapre"],
    editPacient: {
      nombre: null,
      apellido: null,
      edad: null,
      prevision: "fonasa",
    },
  }),
  methods: {
    editPacient() {},
  },
};
</script>
