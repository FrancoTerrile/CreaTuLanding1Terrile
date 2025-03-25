import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

  return (
    <div className='carritoCompra'>
       <a href="#" id="botonCarrito" title="ir al carrito" className="btn btn-danger position-relative"><img src={imgCarrito} alt="carrito de compras"/>
       <span id="totalCarrito" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">0</span></a>
    </div>
  )
}

export default CartWidget