import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDFlzHW747uu1p1TdqWbdFM_omkjORRht4",
    authDomain: "dictionary-5fae9.firebaseapp.com",
    databaseURL: "https://dictionary-5fae9-default-rtdb.firebaseio.com",
    projectId: "dictionary-5fae9",
    storageBucket: "dictionary-5fae9.firebasestorage.app",
    messagingSenderId: "615496664058",
    appId: "1:615496664058:web:0ea7b1bd792d230cbf1a43"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);