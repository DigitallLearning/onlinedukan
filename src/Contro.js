import { useState } from "react"
function Contro()
{
    const [name,setname]=useState();
    const [mob,setMob]=useState();
    function submitForm(e)
    {
         e.preventDefault()
         console.log(name,mob)
    }
    return(
        <div>
           <form onSubmit={submitForm}>
  <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}></input><br></br>
  <input type="number" placeholder="Enter Mobile" onChange={(e)=>setMob(e.target.value)}></input><br></br>
  <button>Submit</button>
</form>
        </div>
    )
}
export default Contro