import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { PrimeIcons } from "primevue/api";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmationService from "primevue/confirmationservice";
import { useConfirm } from "primevue/useconfirm";
import Editor from "primevue/editor";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/aura-light-green/theme.css";
import Chart from "primevue/chart";
import AnimateOnScroll from "primevue/animateonscroll";


import { ref } from "vue";
import { Axios } from "axios";
import emailjs from "@emailjs/browser";
// import VueRecaptcha from "vue-recaptcha";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import App from "./App.vue";
import router from "./router";
import { useRouter } from "vue-router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.directive("animateonscroll", AnimateOnScroll);

// Initialize Firebase (if you haven't already done this)
const firebaseConfig = {
  apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
  authDomain: "lifeline-edu-site.firebaseapp.com",
  projectId: "lifeline-edu-site",
  storageBucket: "gs://lifeline-edu-site.appspot.com/",
  storageBucket: "lifeline-edu-site.appspot.com",
  messagingSenderId: "1059969595497",
  appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { db };

// Vue.prototype.$firebase = firebase;

app.mount("#app");
