import { useState } from "react";
function DeleteAPI()
{
    const [id1,setID]=useState()
    
    function SubmitForm(e)
    {
        e.preventDefault();
       
        const id=parseInt(id1)
        
         const data={id}
         fetch("http://localhost:3000/posts/"+id,{
            method:"DELETE"
         }).then((result)=>{
            console.log(result)
            // result.json().then((data1)=>{
            //     console.log(data1)
            // })
         })
    }
    return(
        <div>
            <h1>Update Data</h1>
           <form onSubmit={SubmitForm}>
          <input type="number" placeholder="Enter Id" onChange={(e)=>setID(e.target.value)}></input><br></br>
           <button>Submit</button>
          </form>
        </div>
    )
}
export default DeleteAPI
