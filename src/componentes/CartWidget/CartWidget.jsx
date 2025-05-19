import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import {CarritoContext} from "../../context/CarritoContext"
import { useContext } from 'react'

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

  const {cantidadTotal} = useContext(CarritoContext);

  return (
    <div className='carritoCompra'>
      <Link to='/Cart'>      
       <a id="botonCarrito" title="ir al carrito" className="btn btn-danger position-relative"><img src={imgCarrito} alt="carrito de compras"/>
       <span id="totalCarrito" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">{
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }</span></a>
      </Link>
    </div>
  )
}

export default CartWidget