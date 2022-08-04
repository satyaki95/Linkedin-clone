import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDb4Bn6FbGK4c5Lf8vcciANbfhds4nhH-c",
    authDomain: "linkedin-clone-ca9b8.firebaseapp.com",
    projectId: "linkedin-clone-ca9b8",
    storageBucket: "linkedin-clone-ca9b8.appspot.com",
    messagingSenderId: "477090836397",
    appId: "1:477090836397:web:646c2c80a00634dc90fb24",
    measurementId: "G-T2CWMZF8QR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth, provider, storage};
  export default db;