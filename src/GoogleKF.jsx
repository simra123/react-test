import react , {useState , useEffect} from 'react';
import NoteHeader from './NoteHeader'
import NoteTitle from './NoteTitle'
import Note from './Note'
import {Row , Col  , Button} from 'react-bootstrap'



const GoogleKF = () => {
    const [addnote , getnote] = useState([])
  
  
    const addNote = (cdata) => {
      
      getnote((prevdata) => {
        return [
          ...prevdata, cdata
        ]
      })
      // console.log(
      //   addnote
      // )
    }
    const onDelete = (id) => {
      getnote((olddata) => {
       return olddata.filter((data , indx) => {
          return indx !== id;
        });
      });
    }
  
    
    return (
     <>
     <NoteHeader/>
     <NoteTitle passNote={addNote}/>
      <Row>
      {addnote.map((val , index) => {
        return <Note
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          deleteItem = {onDelete}
          />
      })}
    </Row>
     </>
    )
   
  }
  export default GoogleKF;
  
  