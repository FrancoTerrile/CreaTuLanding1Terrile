import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, marca, modelo, description, categoria, precio, img}) => {


  return (
    <div>
      <div className="card cardProducto">
        <div className="card-body">
                <img src={img} alt={nombre} />
                <h5 className="card-title">{nombre}</h5>
                <a href="#" className="card-link">U$D {precio}</a>
                <br />
                <Link to={`/item/${id}`}>
                <button>Ver Detalles</button>
                </Link>
         </div>
      </div>
     
    </div>
  )
}

export default Item