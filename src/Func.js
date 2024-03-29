import { useState } from "react"

function Func()
{
   //var name="Ram";
   var [age,setAge]=useState(22)
//    function hello()
//    {
//      //name="Syam"
//      setName("Syam")
//    }
     return(
        <div>
         <h1>My Age is {age}</h1>
         {/* <button onClick={hello}>Submit</button> */}
         <button onClick={()=>setAge(25)}>Submit</button>
        </div>
     )
}
export default Func