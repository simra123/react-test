import React, { useEffect, useState } from 'react';
import './ToDolist.css';
import ToDolist from './ToDolist';
import {db} from './fire';
import  firebase from 'firebase'




const App = () => {
  const [addItem , setAddItem ] = useState([]);
const  [printItem , setPrintItem ] = useState([]);


 
  const addEvent = (pass) => {
    setAddItem(pass.target.value);
  }
  const PrintItemF = () => {
    // getPItem((prevval) => {
    //   return [...prevval , addItem ]
    // });
    

    const todoRef = firebase.database().ref('task')
    const add = {
      todo : addItem ,
      
    }
    todoRef.push(add)
    setAddItem('')
    
   
  }
  
 useEffect(() => {
  const todo = firebase.database().ref('task');
   todo.on('value' , (snapshot) => {

      const printItem = []
      const todo = snapshot.val()
      for (let id in todo){
        printItem.push({id,...todo[id]})
      }
       setPrintItem(printItem)
    //getPItem(printItem)
  });
   
 }, []) 
    
  
  
  const deleteFunc = (id) => {
    // getPItem((delval) =>{
    //   return delval.filter((currdata , index) =>{
    //     return index !== id
    //   })
    // })
    //console.log(id)
  } 
return (
  <div className="main-div">
    <div className="center-div">
      <h1>ToDo list</h1>
      <input 
       type="text" 
       placeholder="add an item" 
       onChange={addEvent} 
       value={addItem}
       />
      <i class="fas fa-plus-circle" on onClick={PrintItemF}></i>
      <button>delete</button>
      <ol>
        {  
        printItem.length > 0 ? printItem.map((val , index) => {
         return (<ToDolist
                  text = {val.todo}/>) 
        }) : "No List Found"
      }
      </ol>
     
     </div>
   </div>

          //  printItem.map((val , index) => {
          //  return (
          //    <ToDolist 
          //     key = {index}
          //     id = {index} 
          //     text = {val}
          //     onSelect = {deleteFunc} />)
          //  })
          
        
       
       
)


}
export default App;

