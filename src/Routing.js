import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Service from "./Service"
import About from "./About"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"
import Nav from "./Nav"
function Routing()
{
   return(
    <div>
        <BrowserRouter>
         <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
   )
}
export default Routing