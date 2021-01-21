import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGiDHNr4ejmf9Yf18Kg-_co_bCESBsLzc",
    authDomain: "clone-6ff82.firebaseapp.com",
    projectId: "clone-6ff82",
    storageBucket: "clone-6ff82.appspot.com",
    messagingSenderId: "232435035413",
    appId: "1:232435035413:web:a0bea338ce8172dd33cd1c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db , auth};