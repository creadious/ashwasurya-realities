// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe5mBC95TQ8b4o_r0mPF5epy-Um-8mEaU",
    authDomain: "ashwasurya-realities-dd18b.firebaseapp.com",
    projectId: "ashwasurya-realities-dd18b",
    storageBucket: "ashwasurya-realities-dd18b.appspot.com",
    messagingSenderId: "722682326690",
    appId: "1:722682326690:web:46571726557a4adc4ef1fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const textDB = getFirestore(app);
export { textDB };