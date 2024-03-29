import { Component } from "react";
class Update extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            count:0
        }
    }
    shouldComponentUpdate()
    {
        if(this.state.count>5 && this.state.count<10)
        {
            console.log("Should Component Update")
            return true;
        }
        else{
            return false;
        }
      
        
    }
      render()
      {
        console.log("Render")
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
     <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
            </div>
        )
      }
      componentDidUpdate()
      {

        console.log("Component Did Update")
      }
}
export default Update
