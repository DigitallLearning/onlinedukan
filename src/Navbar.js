import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import MenCloths from './MenCloths'
import Wcloths from './Wcloths'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/elctronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/mcloths">Men Cloths</NavLink>
            </li>
            <li>
            <NavLink to="/wcloths">Woman Cloths</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/jwellery' element={<Jwellery></Jwellery>}></Route>
            <Route path='/elctronics' element={<Electronics></Electronics>}></Route>
            <Route path='/mcloths' element={<MenCloths></MenCloths>}></Route>
            <Route path='/wcloths' element={<Wcloths></Wcloths>}></Route>
        </Routes>

      </div>
      
    </nav>
  )
}

export default Navbar