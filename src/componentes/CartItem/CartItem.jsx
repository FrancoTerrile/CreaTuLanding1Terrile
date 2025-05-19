import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import "./CartItem.css"
import {db} from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

    const imgTrash = "https://www.svgrepo.com/show/132300/trash-can-with-cover-from-side-view.svg"

  return (
    <div className='cartItem_container'>
      <div className='card'>
          <img className='cart_img' src={item.img} alt={item.nombre}/>
          <h4>{item.nombre}</h4>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: u$s {item.precio}</p>
          <button onClick={()=> eliminarProducto(item.id)}><img className='trash_can' src={imgTrash} alt="trash can"/></button>
      </div>
    </div>
  )
}

export default CartItem