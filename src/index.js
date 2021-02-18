import React from 'react';
import ReactDOM from 'react-dom';
import App , {lmao} from './App'
import Calculator from './Calculator';
import './index.css'
import Cards from './Cards'
import Carray from "./Carray";

//console.log(Carray[0].title)
// const firebase = require('firebase').default
// var firebaseConfig = {
//     apiKey: "AIzaSyBs3Ai3fYvEni5n7UftG6IbgxY_m5xG_2M",
//     authDomain: "to-do-list-f251c.firebaseapp.com",
//     projectId: "to-do-list-f251c",
//     storageBucket: "to-do-list-f251c.appspot.com",
//     messagingSenderId: "593043500946",
//     appId: "1:593043500946:web:871255d252be545b9d1b4b",
//     measurementId: "G-LVDD7HSSSY"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

ReactDOM.render( <App/> , document.getElementById('root'));



// var a = document.createElement("h3")
//  a.innerHTML = "world"
//  document.getElementById("root").appendChild(a) 