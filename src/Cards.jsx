import Reaxt from 'react';
import {Row , Col , Button , Card , CardBody , CardFooter , CardImg , CardTitle } from "react-bootstrap"


const Cards = (props) => {
    return(
            
             
                    <Col xs="12" md="3" className="netflix-card" >
                        <Card className="pt-4 px-2 m-2">
                        <CardImg src={props.imgsrc} alt=""/>
                        <Card.Title>{props.title}</Card.Title>
                        <span>netflix orignal series</span> <br/>
                        <Card.Footer><Button btn="dark" href={props.link} target="blank" >  watch now</Button></Card.Footer>
                        </Card>
                    </Col>
               
    );
} ; export default Cards ;
               