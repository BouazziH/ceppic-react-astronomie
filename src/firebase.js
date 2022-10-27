import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "ceppic-contact-b6a06.firebaseapp.com",
  projectId: "ceppic-contact-b6a06",
  storageBucket: "ceppic-contact-b6a06.appspot.com",
  messagingSenderId: "42577707782",
  appId: "1:42577707782:web:40b328d3262ad965675487",
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
