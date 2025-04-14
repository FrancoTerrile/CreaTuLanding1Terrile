import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, marca, modelo, categoria, description, stock}) => {

  const [agregarCantidad, setagregarCantidad] = useState (0)

  //creamos una funcion manejadora de esa cantidad

  const manejadorCantidad = (cantidad) =>{
    setagregarCantidad(cantidad)
    console.log("Productos agregados" + cantidad);
    
  }

  return (
    <div className='detailContainer'>        
        <h6 className="card-subtitle mb-2 text-body-secondary">{marca}</h6>
        <h5 className='detailName'>{nombre}</h5>
        <img className='detailImg' src={img} alt={nombre}/>
        <h6 className="card-subtitle mb-2 text-body-secondary">{modelo}</h6>
        <p className="card-text">{description}</p>
        {/* <h6 className="card-subtitle mb-2 text-body-secondary">{categoria}</h6> */}
        <h6 className='price'>u$s{precio}</h6>

       {/*  {


          agregarCantidad > 0 ? ( <Link to='/cart'>Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        } */}
    </div>
  )
}

export default ItemDetail