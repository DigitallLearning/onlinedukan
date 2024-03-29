import "./nor.css"
import style from "./abc.module.css"
function ApplyCSS()
{
     return(
        <div>
            <h1 style={{backgroundColor:"red",color:"White"}}>Inline CSS</h1>
            <h1 className="hello">Normal CSS</h1>
            <h1 className={style.hello1}>Moduler CSS</h1>
        </div>
     )
}
export default ApplyCSS