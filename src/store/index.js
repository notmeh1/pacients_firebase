import Vue from "vue";
import Vuex from "vuex";
import { loginModule } from "./modules/login";
import { snackbarModule } from "./modules/snackbar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pacientes: null,
  },
  mutations: {
    SUBMIT_USER_DATA(state, loginData) {
      state.login.userData = loginData;
      state.snackbar.logInAlert.snackbar = true;
    },
    CLEAN_USER_DATA(state) {
      state.login.userData.email = null;
      state.login.userData.password = null;
      state.snackbar.logOutAlert.snackbar = true;
    },
    GET_PACIENT_LIST(state, pacientList) {
      state.pacientes = pacientList;
    },
  },
  actions: {
    submitUserData({ commit }, loginData) {
      commit("SUBMIT_USER_DATA", loginData);
    },
    cleanUserData({ commit }) {
      commit("CLEAN_USER_DATA");
    },
    async getPacientList({ commit }) {
      let pacientList = [];
      await onSnapshot(collection(db, "pacientes"), (doc) => {
        doc.forEach((profile) => {
          pacientList.push({ id: profile.id, ...profile.data() });
          commit("GET_PACIENT_LIST", pacientList);
        }, (pacientList = []));
      });
    },
  },
  modules: {
    login: loginModule,
    snackbar: snackbarModule,
  },
});