export const snackbarModule = {
  namespaced: true,
  state: {
    logInAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Has ingresado exitosamente!",
    },
    logOutAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Has salido exitosamente!",
    },
    errorLogAlert: {
      snackbar: false,
      timeout: 2500,
      text: "La cuenta ingresada no existe",
    },
    addAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Paciente agregado con exito!",
    },
    editAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Cambios guardados con exito!"
    },
    eraseAlert: {
      snackbar: false,
      timeout: 2500,
      text: "Se ha borrado el paciente con exito!",
    },
  },
};
