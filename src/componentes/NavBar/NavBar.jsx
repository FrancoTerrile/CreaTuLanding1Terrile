import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='navBar'>
        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid navContainer" id="navbarSupportedContent">
                <a className="navbar-brand">
                    <Link to='/'>
                        <img className='navLogo' src="https://images.seeklogo.com/logo-png/45/1/guitar-center-new-2022-logo-png_seeklogo-451791.png" alt="guitar center logo"/> FMS 
                    </Link>
                </a>
                <ul className="navbar-nav me-auto mb-4 mb-xl-0 navList">    
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marcas</a>
                    <ul className="dropdown-menu listaNav">
                        <li>
                            <NavLink to='marca/Fender'>
                                <a className="dropdown-item" href="#">Fender</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='marca/Gibson'>
                                <a className="dropdown-item" href="#">Gibson</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='marca/Gretsch'>
                                <a className="dropdown-item" href="#">Gretsch</a>
                            </NavLink>
                        </li>
                    </ul>
                    </li>
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
                </ul>
                    <form className="d-flex searchBar" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <CartWidget/>
                    </form>
            </div>
        </nav>

      </div>
  )
}

export default NavBar