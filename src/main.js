import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBf80jZNep8xA-YvYSBie60Lsk_TsnLFx0",
  authDomain: "userlist-test-vue.firebaseapp.com",
  projectId: "userlist-test-vue",
  storageBucket: "userlist-test-vue.appspot.com",
  messagingSenderId: "31583427025",
  appId: "1:31583427025:web:e5c582ffb8244e4b59a8f0",
});

export const db = getFirestore(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  db,
  render: (h) => h(App),
}).$mount("#app");
