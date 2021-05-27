import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';



const firstName = createContext();
const lastName = createContext();


const PokemonAxios = (props) => {
    const [num , setnum] = useState()
    const [name , setname] = useState()
    const [move , setmove] = useState()
    const [plus , setplus] = useState(0)
    useEffect(
      ()=>{
      async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res)
        setname(res.data.name)
        setmove(res.data.moves[3].move.name)
      }
      getData()
    }  )
    return( <> 
    {/* <firstName.Provider value={"Baka"}>
      <lastName.Provider value="Aneki">
       <CompA/>
       </lastName.Provider>
       </firstName.Provider> */}
       <h4> you selected<span style={{color : "red"}}> {num}</span></h4>
       <h4> my name is <span style={{color : "red"}}>{name}</span> </h4>
       <h4> i have  <span style={{color : "red"}}>{move}</span> {props.move} </h4>
       <select value={num} onChange={(event)=>{
         setnum(
           event.target.value
         )
       }}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
         <option value="11">11</option>
         <option value="12">12</option>
         <option value="13">13</option>
         <option value="14">14</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
       </select>
  
    
   
     </> );
}
export default PokemonAxios
export {firstName , lastName};