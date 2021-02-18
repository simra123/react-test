import React from 'react';

function Calculator() {
    function add(a , b){
        let sum = a + b;
        return sum ;
    } 
    
    function sub(a , b){
        let minus = a - b;
        return minus ;
    }
    
    function div(a , b){
        let divi = a / b;
        divi = divi.toFixed(2)
        return divi ;
    }
    
    function mult(a , b){
        let multi = a * b;
        return multi ;
    } 
    return (
    <ol>
        <li>sum of two num is {add(33 ,20) } </li>
        <li>sub of two num is {sub(33 ,20) } </li>
        <li>div of two num is {div(77 , 55) } </li>
        <li>mutiply of two num is {mult(33 ,20) } </li>
     </ol>
    );
}
 export default Calculator;
