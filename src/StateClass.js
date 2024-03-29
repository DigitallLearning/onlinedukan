const { Component } = require("react");
class StateClass extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"Ram",
            age:25
        }
    }
    render()
    {
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Syam"})}>Summit</button>
            </div>
        )
    }
}
export default StateClass