import { useState } from "react"
import FunState1 from "./FunState1"
function FunState()
{
    const [name,setName]=useState("Ram")
    const [age,setAge]=useState(25)
    function change()
    {
        setName("Syam")
        setAge(28)
    }
     return(
        <div>
            <FunState1 val1={name} val2={age}></FunState1>
            <button onClick={change}>Submit</button>
        </div>
     )
}
export default FunState