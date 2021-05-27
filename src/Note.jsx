import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Row , Col  , Button} from 'react-bootstrap'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const NoteTitle = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id)
  }

  return (
   <>
    
    <Col xs="3">
    <div className="note-added text-center mt-4 shadow pb-5 " >
       <h5> {props.title} </h5>
       <p>{props.content} </p>
      
       <Button className="float-right btn-dark" onClick={deleteNote}>
           <DeleteOutlineIcon/>
       </Button>
   </div>
    </Col>
 
   
    
   </>
  )
  
}
export default NoteTitle;