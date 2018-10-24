import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAdDP1DlY8vworfQrpEAORQKh5LJfnfG1w",
    authDomain: "vuetuto-77d90.firebaseapp.com",
    databaseURL: "https://vuetuto-77d90.firebaseio.com",
    projectId: "vuetuto-77d90",
    storageBucket: "vuetuto-77d90.appspot.com",
    messagingSenderId: "71918300728"
  };
    
let app = Firebase.initializeApp(config)
export const db= app.database()