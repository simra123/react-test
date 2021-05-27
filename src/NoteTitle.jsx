import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button , Form , Row , Col} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Note } from '@material-ui/icons';



const NoteTitle = (props) => {
    const [currdata , getdata] = useState({
        title : '',
        content :  ''}
    )
    const [collapse , expand ] = useState(false)

    const show = () => {
    expand(true)
    }
    const hide = () => {
        expand(false)
    }
    
    const eventInput =(e) => {
      
        const {value , name } = e.target
        console.log(name)
      getdata((preval) => {
          return{
              ...preval, 
              [name] : value
          }
         })
   
    }
    const addEvent = () => {
        props.passNote(currdata)
        getdata({
            title : "",
            content : ""
        })
    }
  return (
   <>
  
       <Row className="justify-content-center">
           <Col xs="4">
           <div className="note-title text-center shadow  mt-3 p-4"  onDoubleClick= {hide}>
           <Form className="form-group">
           { collapse? 
            <div class="form-group">
            <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1"
              onChange={eventInput} 
              name = "title"
              value = {currdata.title}
              placeholder="Title" />
             </div> : null }
        
            <textarea  
             class="form-control m-auto" 
             id="exampleFormControlTextarea1" 
             rows="3" placeholder="write a note..."
             name = "content"
             value = {currdata.content}
             onClick = {show}
            
             onChange={eventInput} 
             ></textarea>
             {collapse? 
            <Button onClick={addEvent} className="btn btn-dark float-right" > <AddIcon/> </Button>
            : null}
        </Form>
        </div>
      </Col>
       </Row>
      
      
   </>
  )
 
}
export default NoteTitle;