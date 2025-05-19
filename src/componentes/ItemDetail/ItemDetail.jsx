import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
//Importamos CarritoContext
import { CarritoContext } from '../../context/CarritoContext'
//Importamos el Hook
import { useContext } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({id, nombre, precio, img, marca, marcaLogo, modelo, categoria, description, stock}) => {

   const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    const manejadorCantidad= (cantidad) => {
      setAgregarCantidad(cantidad)
      console.log("Productos agregados:" + cantidad)
      const item = {id,nombre,precio,img};
      agregarAlCarrito(item, cantidad)
      toast.success("Producto enviado al carrito!",{autoClose: 1000, theme: "dark", position: "top-right"})
    }


  return (
    <div className='detailContainer'>        
        <Link to={`../marca/${marca}`}>
        <img className='logoImg' src={marcaLogo} alt={nombre}/>
        </Link>

        <h5 className='detailName'>{nombre}</h5>
        <img className='detailImg' src={img} alt={nombre}/>
        <h6 className="card-subtitle mb-2 text-body-secondary">{modelo}</h6>
        <p className="card-text">{description}</p>
        <h6 className='price'>u$s{precio}</h6>

        {
          agregarCantidad > 0 ?( <Link to="/cart"> Terminar Compra</Link> ) : ( <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/> )
        }
       
    </div>
  )
}

export default ItemDetail