// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDCW0bOzs9o5ssBXBgJuRIgBjejUvnGXbs",
  authDomain: "fb-clone-104fe.firebaseapp.com",
  projectId: "fb-clone-104fe",
  storageBucket: "fb-clone-104fe.appspot.com",
  messagingSenderId: "521945988778",
  appId: "1:521945988778:web:2d058b7b7c590f0d0d5ad3",
  measurementId: "G-1B4NWJYSMD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };