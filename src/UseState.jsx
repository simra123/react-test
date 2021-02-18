import React , {useState} from 'react';

const UseState = () => {

    let NewTime = new Date().toLocaleTimeString();
    const [currTime , fTime] = useState(NewTime);
  
      const getTime = () => {
        let newTimeInF = new Date().toLocaleTimeString();
        fTime(newTimeInF);
      }
      
   return (
          <div className="zero"> 
          <h1>{currTime}</h1>
          <button onClick={getTime}> Get time </button>
          </div>
      );
  
  
  }; export default UseState;
  
  // const UseState = () => {
  //   let [count , plusNum] = useState(0);
  
  //   const ClickPlus = () => {
  
   
  //     plusNum(count + 1 );
    
  //    console.log("i love you " + count++)
    
  //   };
    
  // return (
  //       <div className="zero"> 
  //       <h1>{count}</h1>
  //       <button onClick={ClickPlus}>click me</button>
  //       </div>
  //   );
  
  
  // }; export default UseState;