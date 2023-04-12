import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css';
import firebase from "firebase/compat/app";
import './assets/tailwind.css'
import vueCountryRegionSelect from 'vue3-country-region-select'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2dGcgG2X3UUf8eRAXw1bK0xnb320Y3c",
  authDomain: "carefair-3da85.firebaseapp.com",
  projectId: "carefair-3da85",
  storageBucket: "carefair-3da85.appspot.com",
  messagingSenderId: "54418113522",
  appId: "1:54418113522:web:6ae50cc69722e1bfa2216b",
  measurementId: "G-LTSCPJCPSD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const app = createApp(App);

app.use( VueAxios,axios)

app.use(router)
app.use(store)
app.use(vueCountryRegionSelect)
app.mount('#app')
