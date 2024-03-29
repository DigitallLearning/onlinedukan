import { useState } from "react"
function Form()
{
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [country,setCountry]=useState();
    function submitForm(e)
    {
        e.preventDefault()
       console.log(name,age,country)
       
    }
     return(
        <div>
          <form onSubmit={submitForm}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br></br>
            <input type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/><br></br>
            Select Country<select onChange={(e)=>setCountry(e.target.value)}>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
                <option>US</option>
                <option>UK</option>
            </select><br></br>
            <button>Submit</button>
          </form>
        </div>
     )
}
export default Form