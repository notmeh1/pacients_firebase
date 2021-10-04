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
  },
};
