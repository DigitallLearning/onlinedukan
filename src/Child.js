function Child(prop)
{
     return(
       <div>
        <button onClick={()=>prop.name("Ram")}>Button</button>
       </div>
     )
}
export default Child