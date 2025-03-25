import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

  return (
    <div className='carritoCompra'>
      <img src={imgCarrito} alt="carrito de compras" />
    </div>
  )
}

export default CartWidget