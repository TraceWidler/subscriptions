import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_HTepdyI6UHFLwP2jUfFJw70eX1Te6dU",
    authDomain: "subscriptions-96437.firebaseapp.com",
    projectId: "subscriptions-96437",
    storageBucket: "subscriptions-96437.appspot.com",
    messagingSenderId: "154761390649",
    appId: "1:154761390649:web:0a3ec7b08e56dba4dabbe8"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
