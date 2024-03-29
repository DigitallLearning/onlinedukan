const { Component } = require("react");


class PropClass1 extends Component
{
   render()
   {
    console.log(this)
    return(
        <div>
            <h1>My name is {this.props.name}</h1>
            <h1>My age is {this.props.age}</h1>
            <h1>My add is {this.props.add}</h1>
        </div>
    )
   }
}
export default PropClass1