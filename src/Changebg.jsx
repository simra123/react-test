import React , {useState} from 'react';

const Changebg = () => {
    let colorr = 'orange'
    const [currcolor , changecolor] = useState(colorr)
      const getcolor = () => {
        colorr = 'yellow';
        changecolor(colorr)
      }
  
   return (
          <div style={{backgroundColor:currcolor}} className="zero"> 
          <h1>hehe</h1>
          <button onClick={getcolor}>change bg</button>
          </div>
      );
  
  
  }; export default Changebg;
  