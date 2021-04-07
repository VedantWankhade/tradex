// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = require('firebase/app');


function initFirebase() {

    const firebaseConfig = {
        apiKey: "AIzaSyD5BRz_kL0PjhaikDoHcTybtrVfTbmt1QQ",
        authDomain: "user-auth-app-2b553.firebaseapp.com",
        projectId: "user-auth-app-2b553",
        storageBucket: "user-auth-app-2b553.appspot.com",
        messagingSenderId: "736549511358",
        appId: "1:736549511358:web:bd804cefa08054381f3eef",
        measurementId: "G-K257KZPEEH"
      };
    firebase.initializeApp(firebaseConfig);
    console.log("Success")
}
module.exports = initFirebase;
