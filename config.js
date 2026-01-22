// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFlzHW747uu1p1TdqWbdFM_omkjORRht4",
    authDomain: "dictionary-5fae9.firebaseapp.com",
    databaseURL: "https://dictionary-5fae9-default-rtdb.firebaseio.com",
    projectId: "dictionary-5fae9",
    storageBucket: "dictionary-5fae9.firebasestorage.app",
    messagingSenderId: "615496664058",
    appId: "1:615496664058:web:0ea7b1bd792d230cbf1a43"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

window.database = firebase.database();

// Avatar options
window.avatarOptions = [
    { id: 'cat', emoji: '🐱', label: 'Cat' },
    { id: 'dog', emoji: '🐶', label: 'Dog' },
    { id: 'bird', emoji: '🐦', label: 'Bird' },
    { id: 'hat', emoji: '🎩', label: 'Hat' },
    { id: 'car', emoji: '🚗', label: 'Car' },
    { id: 'bulb', emoji: '💡', label: 'Light Bulb' },
    { id: 'snake', emoji: '🐍', label: 'Snake' },
    { id: 'scholar', emoji: '👨‍🎓', label: 'Scholar' },
    { id: 'school', emoji: '🏫', label: 'School' }
];