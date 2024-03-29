import { useState } from "react"

function Conditional()
{
    const [status,setStatus]=useState(4)
     return(
        <div>
           {
              status==1?<h1>Hello World 1</h1>
              :status==2?<h1>Hello World 2</h1>
              :status==3?<h1>Hello World 3</h1>
              :null
           }
          {/* <button onClick={()=>setStatus(false)}>Hide</button>
          <button onClick={()=>setStatus(true)}>Show</button> */}
          <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
     )
}
export default Conditional