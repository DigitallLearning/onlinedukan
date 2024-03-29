import { useState } from "react"

function PostData()
{
    const [id1,setId]=useState()
    const [title,setTitle]=useState()
    const [description,setDesc]=useState()
    const [price1,setPrice]=useState()
    const [category,setCat]=useState()
    function submitForm(e)
    {
          const id=parseInt(id1)
          const price=parseInt(price1)
          e.preventDefault()
          const obj={id,title,description,price,category}
          fetch("https://fakestoreapi.com/products/",{
             method:"POST",
             headers:{
                "Accept":"application/json",
                "Conten-Type":"application/json"
             },
             body:JSON.stringify(obj)
          }).then((result)=>{
              result.json().then((data)=>{
                console.log(data)
              })
          })
    }
       return(
        <div>
          <center>   
          <form onSubmit={submitForm}>
            <input type="number" placeholder="Enter ID" onChange={(e)=>setId(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Description" onChange={(e)=>setDesc(e.target.value)}/><br></br>
            <input type="number" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Category" onChange={(e)=>setCat(e.target.value)}/><br></br>
            <button>Submit</button>
           </form>
          </center>
        </div>
       )
}
export default PostData