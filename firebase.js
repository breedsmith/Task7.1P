import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQevRB4BlC8cUoOt9Qje62v9_BOnRwzQM",
    authDomain: "dev-deakin-app.firebaseapp.com",
    projectId: "dev-deakin-app",
    storageBucket: "dev-deakin-app.appspot.com",
    messagingSenderId: "619950792372",
    appId: "1:619950792372:web:816428b03807292a2ac1e1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore();

  export const createUserDocFromAuth = async (userAuth, additonalInformation ={}) => {
    if(! userAuth.email) return;
    const userDocRef= doc(db, 'users', userAuth.uid ); //sets up doc

    const userSnapshot = await getDoc(userDocRef); //retrives doc

    if(! userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try { //add new entry in doc
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additonalInformation
            })
        }
        catch (error){
        console.log('error in creating ' , error.message)
        }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password)
  }