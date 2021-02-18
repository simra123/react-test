import React , {useState} from 'react';


const InputForms = () => {
    const [fullName , getFullName] = useState({
      fname : '',
      lname : '',
      email : '',
      mobNum : ''
    });
  
    const [printAll , getAll] = useState({})
  
    const inEvent = (lol) => {
     
      // console.log(lol.target.placeholder)
      // console.log(lol.target.name)
      // const value = lol.target.value
      // const name = lol.target.name
      const {name , value } = lol.target
      console.log(lol.target)
   
      getFullName((hehe)=>{
        console.log(hehe)
        return{
          ...hehe ,
          name : value,
        }
      //   if(name == "fname"){
      //    return{
      //       fname : value,
      //       lname : hehe.lname,
      //       email : hehe.email,
      //       mobNum : hehe.mobNum
      //     };
      //   }else if(name == "lname"){
      //     return{
      //       fname : hehe.fname,
      //       lname : value,
      //       email : hehe.email,
      //       mobNum : hehe.mobNum
      //      };
      //   }else if(name == "email"){
      //     return{
      //       fname : hehe.fname,
      //       lname : hehe.lname,
      //       email : value,
      //       mobNum : hehe.mobNum
      //     };
      //  }else if(name == "mobNum"){
      //   return{
      //     fname : hehe.fname,
      //     lname : hehe.lname,
      //     email : hehe.email,
      //     mobNum : value
  
      //    };
      //    };
      });
    } 
    const getName = (e)=> {
     e.preventDefault();
     getAll(fullName)
    }
  
   return (
          <div className="forms"> 
          <form onSubmit={getName}>
          <h1 > hello {printAll.fname} {printAll.lname}</h1>
          <h4 style={{textAlign:"center"}}> {printAll.email} </h4>
          <p style={{textAlign:"center"}}> {printAll.mobNum} </p>
          <input 
           type="text"
           placeholder="enter your first name"
           name="fname"
           onChange={inEvent}
           value={fullName.fname}
          />
  
          <br/>
  
          <input 
           type="text"
           placeholder="enter your last name"
           name="lname"
           onChange={inEvent}
           value={fullName.lname}
          />
  
          <br/>
  
          <input 
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={inEvent}
          value={fullName.email}
          />
           <br/>
  
          <input 
          type="number"
          placeholder="enter your phone number"
          name="mobNum"
          onChange={inEvent}
          value={fullName.mobNum}
          />
  
          <br/>
          <button type="submit">send</button>
          </form>
          </div>
      );
  
  
  }; export default InputForms;
  
  // const InputForms = () => {
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
  
  
  // }; export default InputForms;
  
  // //digital clock
  // let NewTime = new Date().toLocaleTimeString(); //11:45 PM
  //  const [currTime /*11:45 PM*/ , fTime] = useState(NewTime); //11:45 PM
  
  //     const getTime = () => {
  //       let newTimeInF = new Date().toLocaleTimeString();
  //       fTime(newTimeInF); //11:45 PM
  //     }
  // setInterval(getTime , 1000)
  //  return (
  //         <div className="zero"> 
  //         <h1>{currTime}</h1>
         
  //         </div>