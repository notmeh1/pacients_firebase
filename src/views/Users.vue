<template>
  <div>
    <v-row class="my-10">
      <v-col></v-col>
      <v-col class="my-10" cols="8" align="center">
        <div class="justify-center" v-if="!$store.state.pacientes">
          <h1>Cargando datos</h1>
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            class="my-3"
          ></v-progress-circular>
        </div>
        <v-card v-if="$store.state.pacientes">
          <v-card-title class="justify-center"><h1>Pacientes</h1></v-card-title>
          <!-- ////////////// asignar a componente /////////////// -->
          <v-overlay :value="addPacientOverlay">
            <v-card color="blue-grey darken-3" class="pa-5">
              <v-card-title><h1>Agregar nuevo paciente</h1></v-card-title>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe el nombre del paciente',
                  ]"
                  label="Nombre"
                  v-model="newPacient.nombre"
                />
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe el apellido del paciente',
                  ]"
                  label="Apellido"
                  v-model="newPacient.apellido"
                />
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe la edad del paciente',
                  ]"
                  label="Edad"
                  type="number"
                  min="1"
                  max="150"
                  v-model="newPacient.edad"
                />
                <v-select
                  :items="previsionList"
                  :rules="[(v) => !!v || 'Por favor elige una prevision']"
                  label="Prevision"
                  v-model="newPacient.prevision"
                ></v-select>
                <v-form> </v-form>
                <div class="d-flex">
                  <v-btn color="success" @click="addNewPacient()"
                    >Agregar paciente</v-btn
                  >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error"
                    @click="addPacientOverlay = !addPacientOverlay"
                    >Cerrar</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-overlay>
          <!-- /////////////// asignar a componente ////////////// -->
          <v-overlay :value="editPacientOverlay">
            <v-card color="blue-grey darken-3" class="pa-5">
              <v-card-title><h1>Editar paciente existente</h1></v-card-title>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe el nombre del paciente',
                  ]"
                  label="Nombre"
                  v-model="newPacient.nombre"
                />
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe el apellido del paciente',
                  ]"
                  label="Apellido"
                  v-model="newPacient.apellido"
                />
                <v-text-field
                  :rules="[
                    (v) => !!v || 'Por favor escribe la edad del paciente',
                  ]"
                  label="Edad"
                  type="number"
                  min="1"
                  max="150"
                  v-model="newPacient.edad"
                />
                <v-select
                  :items="previsionList"
                  :rules="[(v) => !!v || 'Por favor elige una prevision']"
                  label="Prevision"
                  v-model="newPacient.prevision"
                ></v-select>
                <v-form> </v-form>
                <div class="d-flex">
                  <v-btn color="success" @click="editPacient()"
                    >Guardar cambios</v-btn
                  >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error"
                    @click="editPacientOverlay = !editPacientOverlay"
                    >Cerrar</v-btn
                  >
                </div>
              </v-form>
            </v-card>
          </v-overlay>
          <!-- ///////////////////////////// -->
          <template>
            <v-simple-table dense>
              <template>
                <thead>
                  <tr>
                    <th class="text-left">Nombre</th>
                    <th class="text-left">Apellido</th>
                    <th class="text-left">Edad</th>
                    <th class="text-left">Prevision</th>
                    <th class="text-left">
                      <v-btn
                        color="success"
                        icon
                        @click="addPacientOverlay = !addPacientOverlay"
                        ><v-icon>mdi-plus-circle</v-icon></v-btn
                      >
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="paciente in pacientes" :key="paciente.id">
                    <td>{{ paciente.nombre }}</td>
                    <td>{{ paciente.apellido }}</td>
                    <td>{{ paciente.edad }}</td>
                    <td>{{ paciente.prevision.toUpperCase() }}</td>
                    <td>
                      <v-btn
                        color="primary"
                        icon
                        @click="editPacientOpen(paciente.id)"
                        ><v-icon>mdi-pencil</v-icon></v-btn
                      >
                      <v-btn
                        color="error"
                        icon
                        @click="deletePacient(paciente.id)"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/main";
export default {
  data: () => ({
    addPacientOverlay: false,
    editPacientOverlay: false,
    editPacientId: null,
    valid: true,
    previsionList: ["fonasa", "isapre"],
    newPacient: {
      nombre: null,
      apellido: null,
      edad: null,
      prevision: "fonasa",
    },
  }),
  computed: {
    ...mapState(["pacientes"]),
  },
  methods: {
    addNewPacient() {
      addDoc(collection(db, "pacientes"), {
        nombre: this.newPacient.nombre,
        apellido: this.newPacient.apellido,
        edad: this.newPacient.edad,
        prevision: this.newPacient.prevision,
      });
      this.newPacient.nombre = null;
      this.newPacient.apellido = null;
      this.newPacient.edad = null;
      this.addPacientOverlay = false;
    },
    deletePacient(id) {
      deleteDoc(doc(db, "pacientes", id));
    },
    editPacient() {
      let id = this.editPacientId;
      setDoc(doc(db, "pacientes", id), {
        nombre: this.newPacient.nombre,
        apellido: this.newPacient.apellido,
        edad: this.newPacient.edad,
        prevision: this.newPacient.prevision,
      });
      this.newPacient.nombre = null;
      this.newPacient.apellido = null;
      this.newPacient.edad = null;
      this.editPacientOverlay = false;
    },
    editPacientOpen(pacientId) {
      this.editPacientOverlay = !this.editPacientOverlay;
      this.editPacientId = pacientId;
    },
  },
  mounted() {
    this.$store.dispatch("getPacientList");
  },
};
</script>
