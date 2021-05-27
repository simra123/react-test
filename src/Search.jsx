import React, { useState } from 'react';


const Search = () => {
    const [img , setImg] = useState("")

    const image = `https://source.unsplash.com/600x300/?${img}`
   
    const Onchange = (event) => {
        const data = event.target.value;
        console.log(data)
        setImg(data)
      }
    return (
        <>
        <div className="search">
          <input
          type="text"
          placeholder="Search Anything"
          className="search"
          onChange={Onchange}
          value={img} />
        </div>

       { img == "" ? null  :  <img src={image} alt="whatever" /> }
        </>
    )
    
        
        
}
export default Search;