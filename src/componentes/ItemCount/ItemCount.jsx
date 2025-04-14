import React, { useState } from 'react'

const ItemCount = ({stock, inicial, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () =>{
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

  return (
    <div>
        <h5>Stock</h5>
        <button onClick={incrementar}>+</button>
        <p>{contador} -</p>
        <button onClick={decrementar}>-</button>
        <div>
            <button onClick={()=> funcionAgregar(contador)}>Agregar Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount    