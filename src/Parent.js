import Child from "./Child"

function Parent()
{
    function hello(name)
    {
        alert("Hello="+name)
    }
   return(
    <div>
       <Child name={hello}></Child>
    </div>
   )
}
export default Parent