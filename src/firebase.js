import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvs3nVktmIFaRwHax9tb5FpnUpvvV4mfM",
  authDomain: "facebook-clone-40b30.firebaseapp.com",
  databaseURL: "https://facebook-clone-40b30.firebaseio.com",
  projectId: "facebook-clone-40b30",
  storageBucket: "facebook-clone-40b30.appspot.com",
  messagingSenderId: "18956127601",
  appId: "1:18956127601:web:276aacb8321bd2ce97fad0",
  measurementId: "G-XYJM78Z8YN",
};

//Inicializamos la conexion con firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
