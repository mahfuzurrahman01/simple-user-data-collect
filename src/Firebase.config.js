// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZoxdN3zJFG5WmupHtEvmNSN8mIASAjmg",
    authDomain: "get-user-data-app.firebaseapp.com",
    projectId: "get-user-data-app",
    storageBucket: "get-user-data-app.appspot.com",
    messagingSenderId: "831061958184",
    appId: "1:831061958184:web:b3201f23bb43ae84cf9f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;