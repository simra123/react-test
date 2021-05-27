import React from 'react';
import {firstName , lastName} from './PokemonAxios'

const CompC = () => {
 return (<>
   <firstName.Consumer>
       {(value) => {
        return ( <>
         <lastName.Consumer>
                {(value2) => {
                  return <h1>my name is {value} {value2}</h1>
                }}
         </lastName.Consumer>
        </>) 
       }}
   </firstName.Consumer>
  </>)
};
export default CompC
