import React from 'react';
import Calculator from './Calculator';

const Currdate = () => {
const currdate = new Date().getHours();

let greeting = ""
let cssFree = {}

if (currdate >= 1 && currdate < 12){
  greeting = "Good Morning"
  cssFree.color = "red"
}else if (currdate >= 12 && currdate <= 19 ){
  greeting = "Good Evening"
  cssFree.color = "yellow"
}else {
  greeting = "Good Night"
  cssFree.color = "blue"
}

  return (
    <div className="dt"> 
  <h1>  Hello <span style={cssFree}> {greeting} </span> </h1>
   <Calculator/>
  </div>
  
  );}; export default Currdate;