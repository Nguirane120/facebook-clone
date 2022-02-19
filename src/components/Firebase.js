// Import the functions you need from the SDKs you need
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD85IY117FA50EmMZ_jFaYqJiHaOfXL4u8",
    authDomain: "fb-clone-82eeb.firebaseapp.com",
    projectId: "fb-clone-82eeb",
    storageBucket: "fb-clone-82eeb.appspot.com",
    messagingSenderId: "375374012699",
    appId: "1:375374012699:web:4dc96b206a83d9301fb3be"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db

}