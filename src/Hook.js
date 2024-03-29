import { useState } from "react"
function Hook()
{
    const [name,set_name]=useState("Ram")
   return(
    <div>
        <h1>My name is {name}</h1>
        <button onClick={()=>set_name("Syam")}>Submit</button>
    </div>
   )
}
export default Hook