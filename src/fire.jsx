import firebase from 'firebase';


var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBs3Ai3fYvEni5n7UftG6IbgxY_m5xG_2M",
    authDomain: "to-do-list-f251c.firebaseapp.com",
    projectId: "to-do-list-f251c",
    storageBucket: "to-do-list-f251c.appspot.com",
    messagingSenderId: "593043500946",
    appId: "1:593043500946:web:871255d252be545b9d1b4b",
    measurementId: "G-LVDD7HSSSY"
}); 
 
var db = firebaseConfig.firestore();

 export {db};