import React, { useState } from "react"
function StateFun()
{
   // const name="Ram";
    const [name,setName]=useState("Ram")
    const [number,setNumber]=useState(10)
    function hello()
    {
       //name="Syam"
       setName("Syam")
       setNumber(20)
    }
    return(
       <div>
         <h1>My Name is {name}</h1>
        <h1>number is{number}</h1>
         <button onClick={()=>hello()}>Submit</button>
       </div>
      )
}
export default StateFun