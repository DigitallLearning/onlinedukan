import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import PostData from './PostData'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/cloths">cloths</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/post">Post</NavLink>
            </li>
            <li>
              <NavLink to="/update">Update</NavLink>
            </li>
            <li>
              <NavLink to="/delete">Delete</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/jwellery' element={<Jwellery></Jwellery>}></Route>
          <Route path='/electronics' element={<Electronics></Electronics>}></Route>
          <Route path='/post' element={<PostData></PostData>}></Route>
        </Routes>
      </div>
    </nav>
  )
}

export default Header