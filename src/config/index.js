import firebase from "firebase/app";
import "firebase/firestore";

const configureFirebase = () => {
  const config = {
    apiKey: "AIzaSyDcom_cVLGXhZWSWI0j2NkRCFKEvdehj-U",
    authDomain: "bendera-putih-60893.firebaseapp.com",
    projectId: "bendera-putih-60893",
    storageBucket: "bendera-putih-60893.appspot.com",
    messagingSenderId: "476825902976",
    appId: "1:476825902976:web:865a11931e600bbd7a6b65",
    measurementId: "G-H8QS3G2YYW"
  }
  
  firebase.initializeApp(config);
          
  const firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);
}

export default configureFirebase;