import { useRef } from "react"
function RefApp()
{
    const nameRef=useRef()
    const mobRef=useRef()
    function hello()
    {
        const name=nameRef.current.value;
        const mob=mobRef.current.value;
        const add=document.getElementById("add").value;
        console.log(name,mob,add)
    }
    return(
        <div >
            <input type="text" placeholder="Enter Name" ref={nameRef}></input><br></br>
            <input type="number" placeholder="Enter Mob" ref={mobRef}></input><br></br>
            <input type="text" placeholder="Enter Add" id="add"></input><br></br>
            <button onClick={hello}>Submit</button>
        </div>
    )
}
export default RefApp