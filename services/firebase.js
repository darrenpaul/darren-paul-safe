import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "00000000000000000000000000000000",
  authDomain: "00000000000000000000000000000000",
  databaseURL: "00000000000000000000000000000000",
  projectId: "00000000000000000000000000000000",
  storageBucket: "00000000000000000000000000000000",
  messagingSenderId: "00000000000000000000000000000000",
};
if (!firebase.apps.length) {
  try {
    firebase.initializeApp(config);
  } catch (err) {}
}
export const auth = firebase.auth;
export const database = firebase.firestore();
export const storage = firebase.storage().ref();
