import Reaxt from 'react';


const Cards = (props) => {
    return( <div>
        <card>
            <div className="cardbody"> 
            <div className="row">
                <div className="col-4">
                <img src={props.imgsrc} alt=""/>
                <div className="show-title"> <h2>{props.title}</h2> </div>
                <span>netflix orignal series</span> <br/>
                <a href={props.link} target="blank" className="mx-auto"><button > watch now</button></a> 
                </div>
            </div>
            </div>
        </card>
    </div>
    );
} ; export default Cards ;
               