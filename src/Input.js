import { useState } from "react"

function Input()
{
    const [data,setData]=useState()
     return(
        
        <div>
    <input type="text" placeholder="Enter Name" onChange={(e)=>setData(e.target.value) }/>  
          <h1>{data}</h1>
        </div>
     )
}
export default Input