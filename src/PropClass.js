import PropClass1 from "./PropClass1";
const { Component } = require("react");
class PropClass extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"Ram",
            age:25,
            add:"Indore"
        }
    }
   render()
   {
    return(
        <div>
    <PropClass1 name={this.state.name} age={this.state.age} add={this.state.add}/>
           <button onClick={()=>this.setState({
            name:"Syam",
            age:30,
            add:"Bhopal"
        })}>Submit</button>
        </div>
    )
   }
}
export default PropClass