import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAooY5lloGbo-nqDHl4in2Pb8ndDe3J2n8",
    authDomain: "seventhparadigmrenew.firebaseapp.com",
    databaseURL: "https://seventhparadigmrenew.firebaseio.com",
    projectId: "seventhparadigmrenew",
    storageBucket: "seventhparadigmrenew.appspot.com",
    messagingSenderId: "18587242451",
    appId: "1:18587242451:web:fc3a156f422340e275e926",
    measurementId: "G-9SBDPCNZ29"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};