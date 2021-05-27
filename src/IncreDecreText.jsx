import eact from 'react';

const IncreDecreTest = () => {
    let  [IncreDecre , setIncreDecre] = useState(0)
    const plus1 = () => {
      setIncreDecre(IncreDecre + 1)
    }
    const minus1 = () => {
       let zero = 0;
     
      if (IncreDecre > 0 ){
        setIncreDecre(IncreDecre -1)
      }else {
        alert("limit reached")
      }
  
    }
    useEffect( () => {
      let i
      var count = 0
      for (i = 256; i < 789; i++){
       if( i % 7 === 0 ){
         count++
        }
      }
      console.log('Length',count)
    },[])
  
    
  
  
  return (
    <div className="incredecre">
      <h2>{IncreDecre}</h2>
      <div style={{dispaly : "inline-block"}}>
        <button onClick={plus1}><AddIcon/></button>
        <button onClick={minus1}><RemoveIcon/></button>
      </div>
      <Clock/>
    </div>
  
  )
}
export default IncreDecreTest;