import {  Link } from "react-router-dom"
function Nav()
{
   return(
    <div>
        <Link to="/">Home Page</Link><br></br>
          <Link to="/service">Service Page</Link><br></br>
          <Link to="/about">About Page</Link><br></br>
          <Link to="/contact">Contact Page</Link><br></br>
          <Link to="*"></Link><br></br>
    </div>
   )
}
export default Nav