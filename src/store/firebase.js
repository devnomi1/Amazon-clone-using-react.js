import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyA2NOG0tjcZWTBS0BLQhcWc-lcS597AFjk",
	authDomain: "clone-d2532.firebaseapp.com",
	projectId: "clone-d2532",
	storageBucket: "clone-d2532.appspot.com",
	messagingSenderId: "701122164209",
	appId: "1:701122164209:web:1f4aa4539f1f70c6264050",
	measurementId: "G-G7NQKVVB98",
});

// Initialize Firebase

const auth = firebase.auth();

export { auth };
