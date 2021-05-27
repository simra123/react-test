import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App'
import Calculator from './Calculator';
import './index.css'
import Cards from './Cards'
import Carray from "./Carray";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render( <BrowserRouter>
   <App/>
</BrowserRouter>  , document.getElementById('root'));



// var a = document.createElement("h3")
//  a.innerHTML = "world"
//  document.getElementById("root").appendChild(a) 