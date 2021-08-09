import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBSkqJ-I6ES1k0Uxn7CZHdkUL7Y2nca2M",
  authDomain: "pc-api-6428177944420861021-845.firebaseapp.com",
  projectId: "pc-api-6428177944420861021-845",
  storageBucket: "pc-api-6428177944420861021-845.appspot.com",
  messagingSenderId: "360941968942",
  appId: "1:360941968942:web:b730c8a3c5b152333049bf",
  measurementId: "G-8DWNC5TT2E",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
