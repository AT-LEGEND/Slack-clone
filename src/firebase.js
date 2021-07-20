// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyC2IbpNVsdqbliqrMZW6NEDZhx7WSgjPGU",
	authDomain: "slack-clone-2cd6d.firebaseapp.com",
	projectId: "slack-clone-2cd6d",
	storageBucket: "slack-clone-2cd6d.appspot.com",
	messagingSenderId: "18170332378",
	appId: "1:18170332378:web:f8c33f54f392e4a8dfd1e3",
	measurementId: "G-41HV1VVTVH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
