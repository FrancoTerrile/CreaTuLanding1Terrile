import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
      <div className='navBar'>

        {/* <nav className="navbar bg-body-tertiary navBarContainer">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse listContainer" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        <CartWidget/>
        </div>
        </nav> */}

        <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid navContainer" id="navbarSupportedContent">
                <a className="navbar-brand"><img className='navLogo' src="https://images.seeklogo.com/logo-png/45/1/guitar-center-new-2022-logo-png_seeklogo-451791.png" alt="guitar center logo"/> FMS</a>
                <ul className="navbar-nav me-auto mb-4 mb-xl-0 navList">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Instrumentos
                    </a>
                    <ul className="dropdown-menu listaNav">
                        <li><a className="dropdown-item" href="#">Guitarras</a></li>
                        <li><a className="dropdown-item" href="#">Bajos</a></li>
                        <li><a className="dropdown-item" href="#">Cuerdas y Accesorios</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
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