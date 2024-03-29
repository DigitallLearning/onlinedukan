import { useRef } from "react"
function UnControlled1()
{
    const inputref=useRef()
    function hello()
    {
        //console.log(inputref)
        inputref.current.value="Hello my name is Ram"
        console.log(inputref.current.value) 
    }
    return(
        <div>
               <input type="text" placeholder="Enter Name" ref={inputref}></input>
               <button onClick={()=>hello()}>Submit</button>  
        </div>
    )
}
export  default UnControlled1