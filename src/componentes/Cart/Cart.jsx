import React from 'react'
import { useContext } from 'react'
import {CarritoContext} from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"
import { toast } from 'react-toastify'

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <>
            <div className='carritoVacio_container'>
                <h2 className='carritoAlert'>No hay productos en el carrito...</h2>
                <Link to="/">Ver Prodcuctos</Link>
            </div>
            </>
        )
    }

    return (
    <div className='carrito_container'>{carrito.map(producto => <CartItem key={producto.item.id} {...producto}/> )}
        <div className='total_container'>
        <h3>Total: ${total}</h3>
        <h3>Cantidad total:{cantidadTotal}</h3>
        <button onClick={()=>vaciarCarrito()}> Vaciar Carrito</button>
        <Link to="/checkout"> FInaliza Compra</Link>
        </div>
    </div>
  )
}

export default Cart