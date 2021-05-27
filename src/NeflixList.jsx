import react from "react";
import Carray from "./Carray";
import Cards from "./Cards";
import {Row} from 'react-bootstrap'


const NetflixList = () => {

   
    return(
    <div className="bg-dark mb-5">
        <h1 style={
            {fontWeight:"700" ,
             color : "red" ,
             fontSize : "50px" ,
             textTransform : "uppercase"}
              }> Netflix Cards using Map </h1>
          <Row >
          {Carray.map(( val , index ) => {
            return (
                
                <Cards
                    key = {index}
                    id = {val.id}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    link = {val.link} />
                
            )
            })}
          </Row>
        </div> 
  )
}
export default NetflixList;