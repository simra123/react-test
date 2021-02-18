import React from 'react';
import  firebase from 'firebase'


const ToDolist = (props) => {

   const deleteTodo = () => {
     const todoRef = firebase.database().ref('task')
     todoRef.remove()
   }
 return (
    <div className="todocomp">

     <i className="fas fa-times-circle" onClick={deleteTodo}>  </i>
     <li>{props.text} </li>
    </div>
    //  onClick = {()=> {
    //    props.onSelect(props.id)
    //  }}> 
 ) 
        
    
}
export default ToDolist;
    
  