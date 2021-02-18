import REact from 'react';

const Slothf  = (props) => {

        
    let {x , y, z} = props
    
    if (x == y && y == z){
        return (
            <> 
            <h1>it is matching</h1>
            <h1> {x} {y} {z} </h1>
            </>
        );
    } else {
        return (
            <> 
            <h1>its not matching</h1>
            <h1> {x} {y} {z} </h1>
            </>
        )
    };
    }
    const SlothM = () => {
        return (
        <div>
            <h1> 🎰  Welcome to <span>Slot Machine Game</span>🎰 </h1>
         <Slothf
          x = '🤣'
          y = '🤣'
          z = '🤣'
          />
         <Slothf
           x = '🦄' 
           y = '🦄'
           z = '🦄'/>
         <Slothf
            x = '🍎' 
            y = '🍅' 
            z =  '📎' />
         <Slothf
           x = '🙈'
           y = '🙈' 
           z = '🙈'/>
        </div>); 
    
    }; export default SlothM;