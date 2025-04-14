import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, marca, modelo, description, categoria, precio, img}) => {


  return (
    <div>
        <div>
            <div className="card cardProducto">
              <div className="card-body">
                <img src={img} alt={nombre} />
                <h5 className="card-title">{nombre}</h5>
                {/* <h6 className="card-subtitle mb-2 text-body-secondary">{marca}</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">{modelo}</h6>
                <p className="card-text">{description}</p>
                <h6 className="card-subtitle mb-2 text-body-secondary">{categoria}</h6> */}
                <a href="#" className="card-link">U$D {precio}</a>
                <br />
                <Link to={`/item/${id}`}>
                <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
        </div> 
    </div>
  )
}

export default Item