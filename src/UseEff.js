import { useEffect, useState } from "react"
function UseEff()
{
    const [count,setCount]=useState(0)
    const [data,setData]=useState(10)
    const [run,setRun]=useState(100)
   useEffect(()=>{
         console.log("Loading")
   },[])
   return(
    <div>
        <h1>Count : {count}</h1>
        <h1>Data : {data}</h1>
        <h1>Run : {run}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setRun(run+1)}>Run</button>
    </div>
   )
}
export default UseEff