const { Component } = require("react");
class Mount extends Component
{
    componentDidMount()
    {
        console.log("Component Did Mount")
    }
      render()
      {
        console.log("Render")
        return(
            <div>
                <h1>Mount</h1>
            </div>
        )
      }
      constructor()
      {
          super()
          console.log("Constructor")
      }
}
export default Mount