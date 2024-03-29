import { useMemo } from "react"
import { useState } from "react"

function Memo()
{
    const [data,setData]=useState(0)
    const [count,setCount]=useState(10)
    const usememocount=useMemo(function multicount()
    {
        console.log("Hello")
        return data*5
    },[data])
    
    return(
        <div>
            <h1>{usememocount}</h1>
           <h1>Data :{data}</h1> 
           <h1>Count :{count}</h1> 
           <button onClick={()=>setData(data+1)}>Data</button>
           <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
export default Memo