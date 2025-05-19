import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='navBar'>
        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid navContainer" id="navbarSupportedContent">
                <a className="navbar-brand navHome">
                    <Link to='/'>
                        <img className='navLogo' src="https://images.seeklogo.com/logo-png/45/1/guitar-center-new-2022-logo-png_seeklogo-451791.png" alt="guitar center logo"/> FMS 
                    </Link>
                </a>
                <ul className="navbar-nav me-auto mb-4 mb-xl-0 navList">    
                    <li className="nav-item">
                    <NavLink to='categoria/Guitarra Electrica'>
                        <a className="nav-link" href="#">Guitarras</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='categoria/Bajo'>
                        <a className="nav-link" href="#">Bajos</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='marca/Fender'>
                        <a className="nav-link" href="#">Fender</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='marca/Gibson'>
                        <a className="nav-link" href="#">Gibson</a>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='marca/Gretsch'>
                        <a className="nav-link" href="#">Gretsch</a>
                    </NavLink>
                    </li>
                </ul>
                    <form className="d-flex searchBar" role="search">
                        <CartWidget/>
                    </form>
            </div>
        </nav>

      </div>
  )
}

export default NavBar