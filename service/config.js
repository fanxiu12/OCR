import Firebase from 'firebase';

// Initialize Firebase
let firebaseConfig = {
  apiKey: "AIzaSyBCyYycnXHwhWJSg__Uy5PCEY9rAN_ne3g",
  authDomain: "ocr-app-228508.firebaseapp.com",
  databaseURL: "https://ocr-app-228508.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
