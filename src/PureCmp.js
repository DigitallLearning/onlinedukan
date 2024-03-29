const { Component, PureComponent } = require("react");
class PureCmp extends PureComponent
{
    constructor()
    {
        super()
        this.state=
        {

            count:0
        }
    }
    render()
    {
        console.log("render")
        return(
            <div>
                <h1>Count {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
            </div>
        )
    }
}
export default PureCmp