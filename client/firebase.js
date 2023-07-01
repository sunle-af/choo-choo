
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyArGjZM0FZiQqMeicdy6VMRT_z_UbHj2to",
  authDomain: "chochoprj.firebaseapp.com",
  projectId: "chochoprj",
  storageBucket: "chochoprj.appspot.com",
  messagingSenderId: "838872250205",
  appId: "1:838872250205:web:52d26670014cd8199a5ab4"
};
export const  app = initializeApp(firebaseConfig);
export const auth = getAuth();
 
 